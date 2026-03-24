const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let projects = [
  {
    id: 1,
    title: "Road Upgrade Project",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Water Infrastructure Project",
    status: "Planned"
  }
];

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running"
  });
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.post("/api/projects", (req, res) => {
  const { title, status } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "title is required"
    });
  }

  const newProject = {
    id: projects.length + 1,
    title: title,
    status: status || "Draft"
  };

  projects.push(newProject);

  res.status(201).json(newProject);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});