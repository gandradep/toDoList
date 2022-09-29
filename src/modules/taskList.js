/* eslint-disable import/prefer-default-export */
import { TaskTemplate } from './taskTemplate.js';
const tasksContainer = document.getElementById('taskList');
export class TaskList {
  constructor() {
    this.taskArray = [];
  }

  addTask = (task, completed, index) => {
    const taskAdded = new TaskTemplate (task, completed, index);
    this.taskArray.push(taskAdded);
    localStorage.setItem('Task_list', JSON.stringify(this.taskArray));
  }
  getLocalData = () => {
    if (localStorage.getItem('Task_list') !== null){
      this.taskArray = JSON.parse(localStorage.getItem('Task_list'));
    }else {
      this.taskArray = [];
    }
  }
  displayList = () => {
    tasksContainer.innerText = '';
    this.taskArray.forEach((element) => {
      const li = document.createElement('li');
      li.classList.add('dFlex', 'justBetween', 'borderBottom', 'pad10_5', 'littlePadLeft');
      const spanTask = document.createElement('span');
      spanTask.classList.add('dFlex');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      const taskText = document.createElement('p');
      taskText.innerText = element.description;
      taskText.classList.add('littlePadLeft');
      const threeDots = document.createElement('i');
      threeDots.classList.add('fa-solid', 'fa-ellipsis-vertical');
      spanTask.append(checkbox, taskText);
      li.append(spanTask, threeDots);
      tasksContainer.appendChild(li);
    });
  }
}
