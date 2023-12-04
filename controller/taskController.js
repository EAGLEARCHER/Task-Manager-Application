const TaskDB = require("../models/taskModel"); // Importing the Task model
const asyncWrapper = require("../middlewares/async");
// get all the tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await TaskDB.find({});
  return res.status(200).send(tasks);
});
//get a task on id
const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const tasks = await TaskDB.findOne({ _id: id });
  res.status(200).send({ tasks });
});

//create new task
const createTask = asyncWrapper(async (req, res) => {
  const name = req.body.name;
  const task = await TaskDB.create(req.body);
  res.status(201).send(`Task created successfully..... \n ${task}`);
});

// Update Task by ID
const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const updatedTask = await TaskDB.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedTask) {
    return res.status(404).send("Task not found");
  }

  res.status(200).send(updatedTask);
});

// Delete Task by ID
const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const deletedTask = await TaskDB.findByIdAndDelete(id);

  if (!deletedTask) {
    return res.status(404).send("Task not found");
  }

  return res.status(200).send("Task deleted successfully");
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
