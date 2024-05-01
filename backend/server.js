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

//Test av Nitijs variant{
// const promt = [];
// promt.push("Give the answer in a json format? with a title  ");
// promt.push("Can you give me one recipe based on the following steps?`");
// promt.push(`Can you mirror the recepie to my mood, which is ${todaysMood}`);
// promt.push(`My preferences are ${preferences}. meat should not include fish`);
// promt.push(`This cuisine should take ${timeToSpend} to cook.`);
// promt.push(`This dish should be influenced from this area ${country}`);
// promt.push(`This dish should not include ${checkedItems}`);
// prompt.push(
//   "Please provide a detailed recipe, including steps for preparation and cooking."
// );
// }

//let prompt = `I'm feeling ${todaysMood} and have maximum ${timeToSpend} to make food on. I would prefer food from ${country}. Can you give me some different recipes based on this?`
//bygg prompt - skicka inte hela strängen varje gång
//todo: app post promt
//todo: var i body
//?spara svaren med ett användar id i db
//todo: tbx..json array - tbx - parse -
//! kategorisera datan som kommer tbx, markdown format - array med steg - map li - formatera text
//! img - vilken modell
//? insert - få tbx id, bildgenerering - svar - koppla bild till id
app.post("/recipes", async (req, res) => {
  // const { todaysMood, timeToSpend, country } = req.body;
  const { prompt } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user", //system info på förhand
          content: prompt,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    //    res.status(200).json([title, varor, do);

    const result = completion.choices[0].message.content;
    console.log("result:", result);
    console.log("completion:", completion);

    // res.json({ result });
    res.send(result);
  } catch (error) {
    console.error("Error generating recepies:", error);
    res.status(500).json({ error: "Error generating recepies" });
  }
});

/*
app.get("/recipe", async (req, res) => {
  //  const apiKey = process.env.OPENAI_API_KEY;
  const completion = await openai.chat.completions.create({
    //meddelandet till ai
    messages: [
      //array med object
      {
        role: "user",
        content:
          "Im feeling spicy, can you give me some food recipe from India",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const result = completion.choices[0].message.content;
  res.send(result);
});
*/

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
