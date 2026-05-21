# Week 2 – JavaScript Advanced Concepts README

This README covers all the assignments and hands-on exercises completed in Week 2 using JavaScript.
Topics include:

* Date & Time Handling
* Object Copying
* Array & Object Manipulation
* Modular JavaScript
* Real-world Data Processing Engines

The exercises are based on practical scenarios such as LMS platforms, shopping carts, task managers, and e-commerce systems. 

---

# Topics Covered

## 1. Date & Time Operations

Concepts practiced:

* Creating Date objects
* Extracting date and time values
* Formatting dates
* Date comparison
* Date validation
* Age calculation

### Assignments Included

* Current date & time formatter
* Enrollment deadline checker
* Date validation system
* Age calculator

### JavaScript Methods Used

```javascript
new Date()
getFullYear()
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()
```

---

# 2. Object Copying

## Shallow Copy

* Copying objects using spread operator
* Understanding shared references
* Controlled mutation behavior

### Concepts

```javascript
const copy = { ...original };
```

## Deep Copy

* Creating fully independent object copies
* Preventing nested object mutation

### Concepts

```javascript
structuredClone()
JSON.parse(JSON.stringify(obj))
```

---

# 3. Array Operations & Data Processing

Methods practiced:

* `filter()`
* `map()`
* `reduce()`
* `find()`
* `some()`
* `every()`
* `sort()`

### Real-world Use Cases

* User processing engine
* Course catalog management
* Shopping cart calculations
* Permission management

---

# 4. Immutability in JavaScript

Concepts practiced:

* Updating arrays without mutation
* Adding/removing objects immutably
* Safe state updates

### Examples

```javascript
const updatedUsers = users.map(user =>
  user.id === 1 ? { ...user, active: false } : user
);
```

---

# 5. Modular JavaScript (ES Modules)

Concepts practiced:

* Exporting functions
* Importing modules
* Separating business logic
* Reusable code structure

### Files Created

* `validator.js`
* `task.js`
* `payment.js`
* `discount.js`
* `app.js`

### Syntax Used

```javascript
export function myFunction() {}

import { myFunction } from './file.js';
```

---

# 6. Task Management System

A modular Todo application similar to:

* Todoist

### Features

* Task validation
* Due date checking
* Task completion tracking
* Modular architecture

---

# 7. E-Commerce Store Engine

A mini e-commerce backend logic system.

### Features

* Product browsing
* Product search
* Shopping cart management
* Coupon validation
* Discount calculation
* Payment processing
* Order summary generation

### Modules

* Product engine
* Cart engine
* Discount engine
* Payment engine

---

# 8. LMS / Learning Platform Data Engine

Inspired by platforms like:

* Udemy
* Coursera

### Modules Included

## User Processing Engine

* Get active users
* Extract usernames
* Check admin existence
* Deactivate users immutably

## Course Catalog Engine

* Filter published courses
* Sort by price
* Calculate course totals
* Add courses safely

## Shopping Cart Engine

* Merge cart with course details
* Calculate cart totals
* Update quantities immutably

## Role & Permission Engine

* Manage permissions
* Generate unique permission lists
* Add roles dynamically

---

# JavaScript Concepts Practiced

| Concept             | Description                     |
| ------------------- | ------------------------------- |
| Date Object         | Handle date and time            |
| Array Methods       | Process collections efficiently |
| Immutability        | Prevent accidental mutations    |
| ES Modules          | Split logic into reusable files |
| Object Manipulation | Modify nested data safely       |
| Validation          | Validate user inputs            |
| Business Logic      | Build real-world workflows      |

---

# Learning Outcomes

After completing Week 2, you learned:

* Advanced array processing
* Real-world object handling
* JavaScript date operations
* Immutable data updates
* Modular application structure
* Business logic implementation
* Building scalable JavaScript systems

These concepts are important for developing applications using:

* React
* Node.js
* Modern full-stack JavaScript architectures.
