import './style.css';
import { TaskList } from './modules/taskList.js';

import { listFooter } from './modules/listFooter.js';

import { checked } from './modules/check.js';
import { clearComplete } from './modules/clearComplete.js';

const myTaskList = new TaskList();
const form = document.getElementById('addForm');
const tasksContainer = document.getElementById('taskList');
const list = document.getElementById('list');
const clearButton = listFooter();

myTaskList.getLocalData();
myTaskList.displayList();
list.appendChild(clearButton);

/* add task eventListner */
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const indexAssign = myTaskList.taskArray.length + 1;
  myTaskList.addTask(form.firstChild.value, false, indexAssign);
  form.firstChild.value = '';
  myTaskList.displayList();
});

/* update task addEventListener */
tasksContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('pTask')) {
    const arrayVal = myTaskList.togglePtoTextArea(e.target);
    const elementIndex = arrayVal[1];
    const delButton = arrayVal[2];
    arrayVal[0].addEventListener('blur', (e) => {
      myTaskList.updateTask(e.target, elementIndex, delButton);
    });
    delButton.addEventListener('click', (e) => {
      myTaskList.removeTask(e.target, elementIndex);
    });
  }
  if (e.target.classList.contains('check')) {
    e.target.addEventListener('change', (e) => {
      checked(e.target, myTaskList.taskArray);
      myTaskList.displayList();
    });
  }
});

// clear all completed
clearButton.addEventListener('click', () => {
  clearComplete(myTaskList.taskArray);
  myTaskList.getLocalData();
  myTaskList.displayList();
});
