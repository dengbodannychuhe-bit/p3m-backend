import express, { Request, Response } from "express";

const router = express.Router();

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

router.get("/", (_req: Request, res: Response) => {
  res.json(projects);
});

router.post("/", (req: Request, res: Response) => {
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

export default router;