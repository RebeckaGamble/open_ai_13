import express from "express";
import bodyParser from "body-parser";
import OpenAI from "openai";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";
import mysql from "mysql2/promise";

dotenv.config();

const app = express();
const port = process.env.DB_PORT;

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
  port: process.env.PORT,
});

async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}

//create user
app.post("/users", async (req, res) => {
  const { email, username, password } = req.body;

  //encrypt the password before it ends up in the DB
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const result = await query(
      "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
      [email, username, hashedPassword]
    );
    const [user] = await query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    const newAccount = await query(
      "INSERT INTO bookmarks (user_id, recipe_id, avatar ) VALUES (?, ?, ?)",
      [user.id, 0, 0]
    );

    console.log("New user and user account created:", newAccount);
    res.status(201).json({ message: "User created"});
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ error: "Error creating user" });
  }
});

//update user
/*
app.put("/updateuser", async (req, res) => {
  const { email, username, password } = req.body;
     try{ 
      const [user] = await query("SELECT * FROM users WHERE username = ?", [
        username,
      ]);
      
      if (!user) {
        return res.status(401).send("Invalid username or password");
      }
      const updateData = {};
    if (email) updateData.email = email;
    if (username) updateData.username = username;
    if (password) {
      const saltRounds = 10;
      updateData.password = await bcrypt.hash(password, saltRounds);
    }
    const updates = [];
    for (const [key, value] of Object.entries(updateData)) {
      updates.push(`${key} = ?`);
    }
    const sql = `UPDATE users SET ${updates.join(", ")} WHERE username = ?`;
    const values = [...Object.values(updateData), username];

    const result = await query(sql, values);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
    }

      res.status(200).json({ message: "User details updated successfully" });

  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
*/
app.put("/updateuser", async (req, res) => {
  const { email, username, password, newUsername } = req.body;
  try {
    const [user] = await query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    
    if (!user) {
      return res.status(401).send("Invalid username or password");
    }

    const updateData = {};
    if (email) updateData.email = email;
    if (password) {
      const saltRounds = 10;
      updateData.password = await bcrypt.hash(password, saltRounds);
    }

    // Check if the username is being updated
    if (newUsername && newUsername !== username) {
      const [existingUser] = await query("SELECT * FROM users WHERE username = ?", [
        newUsername,
      ]);

      // Check if the new username already exists
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
      }

      // Update the username
      updateData.username = newUsername;
    }

    const updates = [];
    for (const [key, value] of Object.entries(updateData)) {
      updates.push(`${key} = ?`);
    }
    const sql = `UPDATE users SET ${updates.join(", ")} WHERE username = ?`;
    const values = [...Object.values(updateData), username];

    const result = await query(sql, values);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json({ message: "User details updated successfully" });
    }

  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.put('/updateavatar', async (req, res) => {
  const { username, avatarUrl } = req.body;

  try {
    const [user] = await query("SELECT * FROM users WHERE username = ?", [username]);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const sql =  `UPDATE bookmarks SET avatar = ? WHERE user_id = ?`;
    const values = [avatarUrl, user.id];

    const result = await query(sql, values);

    res.status(200).send({ message: 'Avatar updated successfully' });
  } catch (error) {
    console.error("Error updating avatar:", error);
    res.status(500).send({ message: 'Error updating avatar' });
  }
});

app.get("/fetch-avatar", async (req, res) => {
  const { username } = req.query; 
  console.log("get avatar, usernmae", username)

  try {
    const [user] = await query("SELECT * FROM users WHERE username = ?", [username]);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const getAvatar = await query("SELECT avatar FROM bookmarks WHERE user_id = ?", [user.id]);

    // Return the avatar URL as a JSON response
    res.json({ getAvatar });
  } catch (error) {
    console.error("Error fetching avatar:", error);
    res.status(500).json({ error: "Error fetching avatar" });
  }
});

//Generate OTP
async function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

//Log in
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

 try {
    const [user] = await query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  
  if (!user) {
    return res.status(401).send("Invalid username or password");
  }
  // Check hash in DB matches encrypted password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).send("invalid usernam or password");
  }

  //generate session token
  const sessionToken = await generateOTP();

  //insert into sessions
  const result = await query(
    "INSERT INTO sessions (user_id, password) VALUES (?, ?)",
    [user.id, sessionToken]
  );

  // req.session.loggedIn = true;
  res.status(200).json({
    message: "Login successful",
    username: user.username,
    email: user.email,
    sessionToken: sessionToken
  });
} catch (error) {
  console.error("Error logging in:", error);
  return res.status(500).json({ error: "Internal server error" });
}
});

app.post("/logout", async (req, res) => {
  const { sessionToken } = req.body;

  try {
    await query("DELETE FROM sessions WHERE password = ?", [sessionToken]);

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error logging out:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

//generate recipes
app.post("/recipes", async (req, res) => {
  const { prompt } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const result = completion.choices[0].message.content;

    try {
      const parsed = JSON.parse(result);
      console.log("Parsed JSON:", parsed);
      res.json(parsed);
    } catch (error) {
      console.error("JSON parse error:", error);
      res.status(500).json({ error: "Invalid JSON format" });
    }
  } catch (error) {
    console.error("Error generating recipes:", error);
    res.status(500).json({ error: "Error generating recipes" });
  }
});

//generate image
app.post("/generate-image", async (req, res) => {
  const { foodDescription } = req.body;
  if (!foodDescription) {
    return res.status(400).json({ error: "Missing food description" });
  }

  try {
    const imageResponse = await openai.images.generate({
      model: "dall-e-2",
      prompt: foodDescription,
      n: 1,
      size: "256x256",
    });

    const imageUrl = imageResponse.data[0].url;
    console.log(imageUrl);
    res.json({ imageUrl });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Error generating image" });
  }
});

//get bookmarks 
app.post("/getbookmarks", async (req, res) => {
  const { username } = req.body;

  try {
    const [user] = await query("SELECT * FROM users WHERE username = ?", [username]);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const [bookmark] = await query("SELECT * FROM bookmarks WHERE user_id = ?", [user.id]);
    if (!bookmark) {
      console.log("Bookmark not found");
      return res.status(404).json({ message: "Bookmark not found" });
    }

    const recipes = await query("SELECT * FROM recipes WHERE bookmark_id = ?", [bookmark.id]);
    res.json(recipes);
  } catch (error) {
    console.error("Error getting bookmarks:", error);
    res.status(500).json({ error: "Error getting bookmarks" });
  }
});

//bookmark recipe
app.post("/bookmarks", async (req, res) => {
  const { recipe, username } = req.body;

  try {
   const [user] = await query("SELECT * FROM users WHERE username = ?", [username]);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const [bookmark] = await query("SELECT * FROM bookmarks WHERE user_id = ?", [user.id]);
    if (!bookmark) {
      console.log("Bookmark not found");
      return res.status(404).json({ message: "Bookmark not found" });
    }

    // Insert the entire recipe into recipes table
    const result = await query(
      "INSERT INTO recipes (recipe, bookmark_id) VALUES (?, ?)",
      [JSON.stringify(recipe), bookmark.id]
    );

    res.json({ success: true, username });
  } catch (error) {
    console.error("Error bookmarking recipe:", error);
    res.status(500).json({ error: "Error bookmarking recipe" });
  }
});

//remove bookmark
app.delete("/removeBookmark", async (req, res) => {
  const { id, username } = req.body;

  try {
    const [user] = await query("SELECT * FROM users WHERE username = ?", [username]);
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const [bookmark] = await query("SELECT * FROM bookmarks WHERE user_id = ?", [user.id]);
    if (!bookmark) {
      return res.status(404).json({ message: "Bookmark not found" });
    }

    const result = await query("DELETE FROM recipes WHERE id = ? AND bookmark_id = ?", [id, bookmark.id]);
    if (result.affectedRows === 0) {
      console.log("Recipe not found or not bookmarked by this user");
      return res.status(404).json({ message: "Recipe not found or not bookmarked by this user" });
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Error removing bookmark:", error);
    res.status(500).json({ error: "Error removing bookmark" });
  }
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
