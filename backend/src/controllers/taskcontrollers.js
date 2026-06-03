const Task = require("../models/task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json(task);
  } catch (err) {
    res.status(500).send("Error"+err.message);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1, });

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).send("Error"+err.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json("Error"+err.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json("Task deleted successfully");
  } catch (err) {
    res.status(500).json("Error"+err.message);
  }
};

module.exports = {createTask,getAllTasks, updateTask, deleteTask,};