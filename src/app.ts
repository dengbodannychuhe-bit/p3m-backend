import express, { Request, Response } from "express";
import projectRoutes from "./routes/projects";
import riskRoutes from "./routes/risks";
import issueRoutes from "./routes/issues";
import scopeChangeRoutes from "./routes/scopeChanges";
import benefitRoutes from "./routes/benefits";
import grantMilestoneRoutes from "./routes/grantMilestones";
import dashboardRoutes from "./routes/dashboard";

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
app.use("/api/benefits", benefitRoutes);
app.use("/api/grant-milestones", grantMilestoneRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;