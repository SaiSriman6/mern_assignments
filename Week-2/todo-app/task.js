//task.js - Task operations
// TODO: Import validator functions
                    
// import { ... } from './validator.js';            
import {validateTitle,validateDueDate,validatePriority} from "./validator.js";

const tasks=[];
let id=1;


// 1. Add new task
//function addTask(title, priority, dueDate) {
// Validate using imported functions
// If valid, add to tasks array
// Return success/error message
//}       
function addTask(title,priority,dueDate){
  let addmsg=validateTitle(title);
  if(addmsg!=true){
    return addmsg;
  }
  let prioritymsg=validatePriority(priority);
  if(prioritymsg!=true){
    return prioritymsg;
  }
  let dueDatemsg=validateDueDate(dueDate);
  if(dueDatemsg!=true){
    return dueDatemsg;
  }
  let task={
      id:id++,
      title,
      priority,
      dueDate,
      completed:false
  }
  tasks.push(task);
  return "task has been added";
}

// 2. Get all tasks
//function getAllTasks() {
// Return all tasks
//}    
function getAllTasks(){
    return tasks;
}


// 3. Mark task as complete
//function completeTask(taskId) {
// Find task and mark as complete
//}

function completeTask(taskId){
   let task=tasks.find(x=>x.id==taskId);
   if(!task){
    return 'Task not found';
   }
   task.completed=true;
   return "task has been completed";
}

export {addTask,getAllTasks,completeTask};
