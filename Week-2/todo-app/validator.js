/*Task Management System (ToDo App Modules):
Building a task manager like Todoist

i. validator.js - Input validation
// TODO: Export these validation functions
// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
// Your code here
}
        
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
// Your code here
}           
// 3. Validate due date (must be future date)
function validateDueDate(date) {
// Your code here
 }
*/

// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if (title.length===0) {
    return "Title is empty";
  }
  else if(title.length<3){
    return 'title should be of minimum 3 characters';
  }
  else{
  return true;
  }
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  let validPriorities=["low", "medium", "high"];
  if (validPriorities.includes(priority)) {
    return true;
  }
  return "Priority must be low,medium or high";
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
  let dueDate = new Date(date);
  let today = new Date();
  if (dueDate<=today) {
    return "Due date must be a future date.";
  }
  return true;
}
export {validateTitle,validatePriority,validateDueDate};

