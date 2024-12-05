const zod = require("zod");

const todoSchema = zod.object({
  title: zod.string(),
  isComplete: zod.boolean(),
});

const todoCmpltSchema = zod.object({ isComplete: zod.boolean() });

const todoValidation = (data) => {
  const { success } = todoSchema.safeParse(data);
  return success;
};

const todoCmpltValidation = (data) => {
  const { success } = todoCmpltSchema.safeParse(data);
  return success;
};

module.exports = { todoCmpltValidation, todoValidation };
