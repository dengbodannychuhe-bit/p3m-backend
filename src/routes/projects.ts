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
  const { title, description, manager, budget, stage, status, approvalStatus } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "title is required",
    });
  }

  const newProject = await prisma.project.create({
    data: {
      title,
      description,
      manager,
      budget: budget ? Number(budget) : null,
      stage: stage || "Proposal",
      status: status || "Pending Approval",
      approvalStatus: approvalStatus || "Pending",
    },
  });

  res.status(201).json(newProject);
});

export default router;