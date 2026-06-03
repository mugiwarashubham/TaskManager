require("dotenv").config();



const express = require("express");
const cors = require("cors");

const main = require("./config/db");
const taskRoutes = require("./routes/taskroutes");

const app = express();

app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).send("Task Manager API Running 🚀");
});

// Task Routes
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 4000;

main()
  .then(() => {
    console.log(" Database Connected");

    app.listen(PORT, () => {
      console.log(` Server listening at ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database Connection Failed");
    console.error(error);
    process.exit(1);
  });