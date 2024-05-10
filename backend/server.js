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

// help function to make code look nicer
async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}

//skapa användare
app.post("/users", async (req, res) => {
  const { email, username, password } = req.body;
  // kryptera lösenordet innan det hamnar i DB
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log("hashedPassword", hashedPassword);
  try {
    const result = await query(
      "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
      [email, username, hashedPassword]
    );
    const [user] = await query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    const newAccount = await query(
      "INSERT INTO bookmarks (user_id, recipe_id ) VALUES (?, ?)",
      [user.id, 0]
    );
    console.log("New user and user account created:", newAccount);
    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ error: "Error creating user" });
  }
});

//Logga in
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // 1. Gör select och hämta raden som matchar username
  const result = await query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  console.log("result", result);
  const user = result[0];
  if (!user) {
    return res.status(401).send("Invalid username or password");
  }
  // 2. Kolla hash i DB matchar crypterat lösenord
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).send("invalid usernam or password");
  }
  res.status(200).json({ message: "login successful" });
});

//recipes
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
    console.log("result:", result);
    const parsed = JSON.parse(result);
    console.log("pased", parsed);
    res.json(parsed);
  } catch (error) {
    console.error("Error generating recepies:", error);
    res.status(500).json({ error: "Error generating recepies" });
  }
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
