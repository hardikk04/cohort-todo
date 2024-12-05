const mongoose = require("mongoose");

const db = mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("CONNECTED TO DB");
  })
  .catch(() => {
    console.log("DB CONNECTION FAILED");
  });

module.exports = db;
