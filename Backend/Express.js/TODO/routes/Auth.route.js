import express from "express";
import { AddTaskMiddlewares } from "../middlewares/AddValidation.js";
import { AddTask, GetAllTasks, GetTaskById, UpdateTask, DeleteTask } from "../Controllers/AuthController.js";
const router = express.Router();

router.post("/api/tasks", AddTaskMiddlewares, AddTask);
router.get("/api/tasks", GetAllTasks);
router.get("/api/tasks/:id", GetTaskById);
router.put("/api/tasks/:id", UpdateTask);
router.delete("/api/tasks/delete/:id", DeleteTask);

export { router };