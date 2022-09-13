const http = require("http");

http.createServer((request, response) => {
  response.writeHead(200, { 'Contente-Type': 'apliccation/json' });

  if(request.url === "/produto"){
    response.end(JSON.stringify({
      message: "rota de produto"
    }))
    return
  }

  if(request.url === "/usuario"){
    response.end(JSON.stringify({
      message: "rota de usuario"
    }))
    return
  }

  response.end(JSON.stringify({
    message: "essa rota não existe :P"
  }));
}).listen(4001, () => console.log("servidor esta rodando na porta 4001"));

