const http = require("http");
const express = require("express");
const { Server: SocketServer } = require("socket.io");
const pty = require("node-pty");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

const ptyProcess = pty.spawn("bash", [], {
  name: "xterm-color",

  cwd: "user",
  env: process.env,
});

ptyProcess.onData((data) => {
  io.emit("terminal:data", data);
});

io.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
});

app.post("/api/terminal", (req, res) => {
  const { data } = req.body;
  ptyProcess.write(data);
  res.sendStatus(200);
});

server.listen(9000, () => {
  console.log("Server started on port 9000");
});
