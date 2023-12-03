const getAllTasks = (req, res) => {
  res.send("getting all tasks.....");
};
const getTask = (req, res) => {
  res.send("getting one task.....");
};
const createTask = (req, res) => {
  res.send("Creating task.....");
};
const updateTask = (req, res) => {
  res.send("Updating task.....");
};
const deleteTask = (req, res) => {
  res.send("Deleting task.....");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
