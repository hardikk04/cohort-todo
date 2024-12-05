const express = require("express");
const todoModel = require("../model/todos-model");

const {
  todoCmpltValidation,
  todoValidation,
} = require("../utils/zod-validation");

const router = express.Router();

router.get("/todos", async (req, res) => {
  try {
    const todos = await todoModel.find({});
    res.send(todos);
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/todo", async (req, res) => {
  try {
    const check = todoValidation(req.body);
    if (check) {
      const todo = await todoModel.create(req.body);
      return res.send(todo);
    } else {
      res.send("Wrong data");
    }
  } catch (error) {
    res.send(error.message);
  }
});

router.put("/complete/:id", async (req, res) => {
  try {
    const check = todoCmpltValidation(req.body);

    if (check) {
      const updatedTodo = await todoModel.updateOne(
        { _id: req.params.id },
        { isComplete: req.body.isComplete }
      );

      res.send(updatedTodo);
    } else {
      res.send("WRONG DATA");
    }
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
