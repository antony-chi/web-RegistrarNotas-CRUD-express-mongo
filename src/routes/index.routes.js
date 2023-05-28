import { Router } from "express";
import Task from "../models/Task";
import * as Tasksctl from "../controller/tasks.controller";

const router = Router();

router.get("/", Tasksctl.renderTaks);

router.post("/taskS/add", Tasksctl.createTasks);

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

export default router;
