require("dotenv").config();

const express = require("express");
const cors = require("cors");

const main = require('./config/db');

const taskRoutes = require("./routes/taskroutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/tasks", taskRoutes);

main().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server listening at"+process.env.PORT);
  });
});