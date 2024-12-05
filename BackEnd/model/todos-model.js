const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: String,
  isComplete: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;
