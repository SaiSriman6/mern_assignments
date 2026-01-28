// app.js - Main application
// TODO: Import task functions

// import { ... } from './task.js';
import {addTask,getAllTasks,completeTask} from "./task.js";

// // Test your module system
// 1. Add some tasks
console.log(addTask('java','high','23-02-2026'));
console.log(addTask('python','medium','26-01-2026'))

// 2. Display all tasks
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(1));

// 4. Display all tasks again
console.log(getAllTasks());
