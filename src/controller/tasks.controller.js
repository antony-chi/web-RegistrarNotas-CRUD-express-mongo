import Task from "../models/Task";

export const renderTasks = async (req, res) => {
    const task = Task(req.body);
    const taskSaved = await task.save();
    //console.log(taskSaved);
    res.redirect("/");
};