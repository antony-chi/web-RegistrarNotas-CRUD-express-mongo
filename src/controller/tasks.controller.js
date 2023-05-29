import Task from "../models/Task";

//mostrar la lista de tareas desde la pagina principal
export const renderTasks = async (req, res) => {

  const tasksDB = await Task.find().lean()
  //console.log(tasksDB)
  res.render("index", { tasks: tasksDB});
};

//crear tarea (create add)
export const createTasks = async (req, res) => {
    const task = Task(req.body);
    const taskSaved = await task.save();
    //console.log(taskSaved);
    res.redirect("/");
};

//obtener tarea por ID para cargar los datos en el formulario a mostrar 
export const renderTaskById = async (req, res) => {
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
};

export const DeleteTaskbById = async (req, res) => {
  const Taskid = req.params.idTask
  console.log("deleted ",Taskid);
  await Task.findByIdAndDelete(Taskid);
  res.redirect("/")
};

export const ToggleCheckDone = async (req, res) => {
  const TaskId = req.params.idTask
  //consultamos a la DB por ID
  const TaskDb = await Task.findById(TaskId);
  const savedDb = await Task.findByIdAndUpdate(TaskId,{done:!TaskDb.done});
  //console.log(savedDb)
 //cambiamos el valor a lo contrario ejemp: si es verdadero > false
  //const doneDB = await Task.save();//guardamos el cambio en BD
  res.redirect("/");
}