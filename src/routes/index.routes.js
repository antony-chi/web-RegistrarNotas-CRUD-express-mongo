import { Router } from "express";
import * as Tasksctl from "../controller/tasks.controller";

const router = Router();

router.get("/", Tasksctl.renderTasks);

router.post("/taskS/add", Tasksctl.createTasks);


router.get("/edit/:idTask", Tasksctl.renderTaskById);

router.post("/edit/:idTask", Tasksctl.UpdateTaskbyId);

router.get('/delete/:idTask', Tasksctl.DeleteTaskbById);

router.get('/toggleCheckDone/:idTask',Tasksctl.ToggleCheckDone);

/*router.get("/about", (req, res) => {
  res.render("about");
});
*/


export default router;
