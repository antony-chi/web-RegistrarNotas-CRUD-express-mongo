import { Router } from "express";
import * as Tasksctl from "../controller/tasks.controller";

const router = Router();

router.get("/", Tasksctl.renderTasks);

router.post("/task/add", Tasksctl.createTasks);


router.get("/task/:idTask/edit", Tasksctl.renderTaskById);

router.post("/task/:idTask/edit", Tasksctl.UpdateTaskbyId);

router.get('/task/:idTask/delete', Tasksctl.DeleteTaskbById);

router.get('/task/:idTask/toggleCheckDone',Tasksctl.ToggleCheckDone);

/*router.get("/about", (req, res) => {
  res.render("about");
});
*/


export default router;
