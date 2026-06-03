const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(process.env.DB_CONNECT_STRING);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
    process.exit(1);
  }
}

module.exports = main;