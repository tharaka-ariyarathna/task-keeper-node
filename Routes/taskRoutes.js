import express from 'express' ;
import { createTask, getTasks, getTask, editTask } from './Controllers/taskController.js';

const router = express.Router() ;

router.post("/", createTask) ;
router.get("/", getTasks) ;
router.get("/:id", getTask) ;
router.put("/:id", editTask) ;

export default router ;