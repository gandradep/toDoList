import './style.css';
import { TaskList } from './modules/taskList.js';
import { sort } from './modules/sort.js';
import { iterate } from './modules/iterate.js';
const myTaskList = new TaskList();
const form = document.getElementById('addForm');
const tasksContainer = document.getElementById('taskList');
myTaskList.getLocalData();
myTaskList.displayList();

 /* add task eventListner */
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const indexAssign = myTaskList.taskArray.length + 1;
  myTaskList.addTask(form.firstChild.value, false, indexAssign);
  console.log(myTaskList.taskArray);
  form.firstChild.value = '';
  myTaskList.displayList();
});

/* update task addEventListener */
tasksContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('pTask')) {
    const arrayVal = myTaskList.togglePtoTextArea(e.target);
      arrayVal[0].addEventListener('blur', (e) => {
      myTaskList.updateTask(e.target, arrayVal[1], arrayVal[2]);
    });
    arrayVal[2].addEventListener('click', (e) => {
      console.log('click');
    });
  }
});
