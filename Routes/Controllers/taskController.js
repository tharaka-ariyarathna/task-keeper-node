const taskList = [];

//Creating a task
export const createTask = (req, res) => {
  const { title, description } = req.body;
  if (title && description) {
    const task = {
        title: title,
        description : description,
        id : taskList.length + 1
    }
    taskList.push(task) ;
    return res.status(200).json("Task added successfully") ;
  } else {
    return res.status(400).json("Incomplete request");
  }
};

//get tasks
export const getTasks = (req, res) => {
    if(taskList.length > 0){
        return res.status(200).json({taskList : taskList}) ;
    }else{
        return res.status(404).json("No task to display") ;
    }
}

//get specific task
export const getTask = (req, res) => {
    const id = req.params.id ;
    const task = taskList.find((task) => task.id == id) ;
    if(task){
        return res.status(200).json({task : task}) ;
    }else{
        return res.status(404).json("Task not found") ;
    }
}







































































