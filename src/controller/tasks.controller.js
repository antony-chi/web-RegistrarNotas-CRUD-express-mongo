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

//obtener tarea por ID para cargar los datos en el formulario a mostrar 
export const getEditTask = async (req, res) => {
    try {
    const idTask = req.params.idTask
    console.log(idTask)
    const taskDB = await Task.findById(idTask).lean()
  
    res.render("edit",{task: taskDB});
    } catch (error) {
      console.log(error)
    }
};

//update Task para actualizar la tarea modificada desde el formulario y guardar el BD
export const UpdateTaskbyId = async (req, res) => {
  const idTask = req.params.idTask
  console.log(req.params.idTask)
  console.log(req.body)

  await Task.findByIdAndUpdate(idTask,req.body)

  res.redirect("/")
}