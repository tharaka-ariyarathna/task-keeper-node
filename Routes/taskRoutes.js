import express from "express";
import {
  createTask,
  getTasks,
  getTask,
  editTask,
  deleteTask,
} from "./Controllers/taskController.js";
import { createValidation } from "./Controllers/middleware/requestValidation.js";

const router = express.Router();

router.post("/", createValidation, createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.put("/:id", editTask);
router.delete("/:id", deleteTask);

export default router;
