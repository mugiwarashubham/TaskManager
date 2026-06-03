const express = require("express");

const router = express.Router();

const {createTask,getAllTasks,updateTask,deleteTask,} = require("../controllers/taskcontrollers");

router.post("/create", createTask);

router.get("/getAllTasks", getAllTasks);

router.post("/updateTask/:id", updateTask);

router.delete("/delete/:id", deleteTask);

module.exports = router;