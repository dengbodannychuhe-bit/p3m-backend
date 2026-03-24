import express, { Request, Response } from "express";
import projectRoutes from "./routes/projects";

const app = express();

app.use(express.json());

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "Backend is running"
  });
});

app.use("/api/projects", projectRoutes);

export default app;