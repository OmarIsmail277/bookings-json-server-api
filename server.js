const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middleware for logging or CORS
server.use(middlewares);

// Body parsing
server.use(jsonServer.bodyParser);

// Example of custom route (optional)
server.post("/login", (req, res) => {
  const { username } = req.body;
  res.status(200).json({ message: `Welcome ${username}` });
});

// Use the default router (must come last)
server.use(router);

// Use port 8080 for Railway
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});
