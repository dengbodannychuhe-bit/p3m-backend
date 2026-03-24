const express = require("express");
const projectRoutes = require("./routes/projects");

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running"
  });
});

app.use("/api/projects", projectRoutes);

module.exports = app;