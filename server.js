const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("booking-db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
