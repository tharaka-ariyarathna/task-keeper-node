import express from "express";
import {
  createTask,
  getTasks,
  getTask,
  editTask,
  deleteTask
} from "../Controllers/taskController.js";
import { createTaskValidation, taskValidation, test } from "../middleware/requestValidation.js";

const router = express.Router();

router.post("/", createTaskValidation, createTask);
router.get("/", getTasks);
router.get("/:id", taskValidation, test, getTask);
router.put("/:id", taskValidation, editTask);
router.delete("/:id", taskValidation, deleteTask);

export default router;
