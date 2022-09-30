import './style.css';
import { TaskList } from './modules/taskList.js';

import { listFooter } from './modules/listFooter.js';

import { checked } from './modules/check.js';

const myTaskList = new TaskList();
const form = document.getElementById('addForm');
const tasksContainer = document.getElementById('taskList');
const list = document.getElementById('list');
myTaskList.getLocalData();
myTaskList.displayList();
list.appendChild(listFooter());

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
      const li = e.target.parentNode.parentNode;
      checked(e.target, myTaskList.taskArray);
      
    });
  }
});
