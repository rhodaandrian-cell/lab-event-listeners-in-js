# Lab: Event Listeners with JavaScript

## Overview
This lab focuses on implementing **JavaScript event listeners** to handle user interactions with a web page. The goal is to create a dynamic interface where actions such as button clicks, keyboard input, and text input trigger changes in the DOM.

By completing this lab, you will practice:
- Adding and managing event listeners
- Dynamically updating DOM elements
- Handling user inputs in real-time
- Writing modular and reusable JavaScript functions
- Testing JavaScript functions with Jest

---

## Project Structure


---

## Features

1. **Handle Button Clicks**
   - `changeBackgroundColor()` → Changes the page background color when the button is clicked.
   - `resetBackgroundColor()` → Resets the background color to default on double-click.

2. **Capture Keyboard Input**
   - `displayKeyPress(event)` → Updates a paragraph with the key pressed by the user.

3. **Process Text Input**
   - `displayUserInput()` → Displays real-time input from a text field into a paragraph.

4. **Event Listener Setup**
   - `setupEventListeners()` → Attaches all event listeners when the DOM is loaded.

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone git@github.com:<your-username>/lab-event-listeners-in-js.git
cd lab-event-listeners-in-js

## Install Dependencies
npm install

## Run Test
npm test
**All tests are written with Jest to validate event listeners and DOM updates.

##Event LIsteners Functions
changeBackgroundColor()    // Changes background color
resetBackgroundColor()     // Resets background color
displayKeyPress(event)     // Shows pressed key
displayUserInput()         // Displays typed text
setupEventListeners()      // Attaches all listeners

Author

Rhoda Andrian – Junior Developer
Email: rhodaandrian@gmail.com 

