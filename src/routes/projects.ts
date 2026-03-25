import express, { Request, Response } from "express";
import prisma from "../prisma";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json(projects);
});

router.post("/", async (req: Request, res: Response) => {
  const { title, description, status } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "title is required",
    });
  }

  const newProject = await prisma.project.create({
    data: {
      title,
      description,
      status: status || "Draft",
    },
  });

  res.status(201).json(newProject);
});

export default router;