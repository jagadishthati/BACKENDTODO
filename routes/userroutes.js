const express = require("express");
const router = express.Router();
const {createTodoController,createTaskTodoController, deleteTodoController, getTodosController, getTodoController, todo,}= require("../controllers/Usercontroller")

router.get("/", todo)
router.post("/api/v1/createTodo",createTodoController );
router.post("/api/v1/createTask",createTaskTodoController );
router.delete("/api/v1/deleteTodo" ,deleteTodoController );
router.get("/api/v1/getallTodos", getTodosController);
router.get("/api/v1/getatodo", getTodoController);

module.exports =router;