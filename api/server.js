const express = require("express");
const actionRouter = require("./actions/actions-router");
const projectRouter = require("./projects/projects-router");

const server = express();
server.use(express.json());
server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

server.get("*", (req, res) => {
  res.send(`<h2>This needs to start working</h2>`);
});

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
