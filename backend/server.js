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

//let prompt = `I'm feeling ${todaysMood} and have maximum ${timeToSpend} to make food on. I would prefer food from ${country}. Can you give me some different recipes based on this?`
//bygg prompt - skicka inte hela strängen varje gång 
//todo: app post promt
//todo: var i body
//?spara svaren med ett användar id i db 
//todo: tbx..json array - tbx - parse - 
//! kategorisera datan som kommer tbx, markdown format - array med steg - map li - formatera text
//! img - vilken modell 
//? insert - få tbx id, bildgenerering - svar - koppla bild till id
app.get("/recipes", async (req, res) => {
  // const { todaysMood, timeToSpend, country } = req.body;
 
   const completion = await openai.chat.completions.create({
     messages: [
       {
         role: "user", //system info på förhand
         content: prompt
       }
     ],
     model: "gpt-3.5-turbo"
   })
   //    res.status(200).json([title, varor, do);
 
   const result = completion.choices.message[0].content;
   console.log("result:", result)
   console.log("completion:", completion)
 
   res.send(result)
 })

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
