import './style.css';
import { TaskList } from './modules/taskList.js';
import { sort } from './modules/sort.js';
import { iterate } from './modules/iterate.js';
const myTaskList = new TaskList();
const form = document.getElementById('addForm');
myTaskList.getLocalData();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const indexAssign = myTaskList.taskArray.length + 1;
  myTaskList.addTask(form.firstChild.value, false, indexAssign);
  console.log(myTaskList.taskArray);
  form.firstChild.value = '';
})
