const { response, request } = require("express");
const express = require("express");

const app = express();

const products = [];

app.post("/products", (request, response) =>{
  //Nome e preço
  const body = request.body;
  console.log(body)
})

app.listen(4002, () => console.log("Está rodando na porta 4002"))