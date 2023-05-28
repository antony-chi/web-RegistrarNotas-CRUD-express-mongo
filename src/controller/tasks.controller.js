import Task from "../models/Task";

export const renderTaks = async (req, res) => {

  const tasksDB = await Task.find().lean()
  //console.log(tasksDB)
  res.render("index", { tasks: tasksDB});
};

export const createTasks = async (req, res) => {
    const task = Task(req.body);
    const taskSaved = await task.save();
    //console.log(taskSaved);
    res.redirect("/");
};