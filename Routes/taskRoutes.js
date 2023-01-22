import express from 'express' ;
import { createTask, getTasks, getTask } from './Controllers/taskController.js';

const router = express.Router() ;

router.post("/", createTask) ;
router.get("/", getTasks) ;
router.get("/:id", getTask) ;

export default router ;