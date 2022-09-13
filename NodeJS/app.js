const { response, request } = require("express");
const express = require("express");

const app = express();

app.get("/primeira-rota", (request, response) => {
  response.json({
    message: "acessou a primeira rota"
  })
});

app.listen(4002, () => console.log("Está rodando na porta 4002"))