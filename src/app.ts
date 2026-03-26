import express, { Request, Response } from "express";
import projectRoutes from "./routes/projects";
import riskRoutes from "./routes/risks";
import issueRoutes from "./routes/issues";
import scopeChangeRoutes from "./routes/scopeChanges";

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
app.use("/api/issues", issueRoutes);
app.use("/api/scope-changes", scopeChangeRoutes);

export default app;