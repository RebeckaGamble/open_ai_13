import express from "express";
import bodyParser from "body-parser";
import OpenAI from "openai";
import dotenv from "dotenv";
import cors from "cors"


dotenv.config();

const app = express();
const port = process.env.DB_PORT; 

app.use(cors())
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

//
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

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
