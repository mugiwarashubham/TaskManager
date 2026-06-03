require("dotenv").config();

console.log("🚀 APP STARTED");
console.log("PORT =", process.env.PORT);
console.log(
  "DB_CONNECT_STRING =",
  process.env.DB_CONNECT_STRING ? "FOUND" : "MISSING"
);

const express = require("express");
const cors = require("cors");

const main = require("./config/db");
const taskRoutes = require("./routes/taskroutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 4000;

main()
  .then(() => {
    console.log("✅ Database Connected");

    app.listen(PORT, () => {
      console.log(`✅ Server listening at ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database Connection Failed");
    console.error(error);
  });