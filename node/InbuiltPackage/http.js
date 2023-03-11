let http = require("http");

// req => what we send to server(params, queryParams, body)
// res => what server will send us back

let server = http.createServer((req, res) => {
  res.write(`<h1>Hi from NodeJS Server</h1>`);
  res.end();
});

server.listen(4000);
