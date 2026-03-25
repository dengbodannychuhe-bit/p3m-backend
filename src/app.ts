import express, { Request, Response } from "express";
import projectRoutes from "./routes/projects";
import riskRoutes from "./routes/risks";

const app = express();

app.use(express.json());

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "Backend is running"
  });
});

app.use("/api/projects", projectRoutes);
app.use("/api/risks", riskRoutes);

export default app;