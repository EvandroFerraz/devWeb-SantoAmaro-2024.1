// Configurar o Dotenv e pegar o valor da variável
// de ambiente
require("dotenv").config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
console.log(OPENAI_API_KEY);

// Configuração do Express
const express = require("express");
const app = express();
// o formato dos dados compartilhados entre
// as requisições HTTP deve ser JSON
app.use(express.json());
//backend vai ser executado na porta 4000
app.listen(4000);

// Configurando CORS
const cors = require("cors");
// aplicamos as configurações de segurança do cors
// nas requisições HTTP do objeto express (app)
app.use(cors());
app.options("*", cors());

// Configurando o OpenAI
const { OpenAI } = require("openai");
const openai = new OpenAI(OPENAI_API_KEY);

// POST
app.post("/pergunte-ao-chatgpt", async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: req.body.prompt }],
    model: "gpt-3.5-turbo",
    max_tokens: 200,
  });
  console.log(completion);
  res.send(completion.choices[0].message.content);
});
//npm run start:dev