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
      spanTask.classList.add('dFlex', 'fGrow');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      const taskText = document.createElement('p');
      taskText.innerText = element.description;
      taskText.classList.add('littlePadLeft', 'pTask', 'fGrow');
      const textArea = document.createElement('textArea');
      textArea.classList.add('littlePadLeft', 'fGrow', 'dNone', 'mr10p');
      const editButton = document.createElement('button');
      const threeDots = document.createElement('i');
      threeDots.classList.add('fa-solid', 'fa-ellipsis-vertical', 'pad10_5');
      const delSymbol = document.createElement('i');
      delSymbol.classList.add('fa-regular', 'fa-trash-can', 'dNone');
      editButton.append(threeDots, delSymbol);
      spanTask.append(checkbox, taskText, textArea);
      li.append(spanTask, editButton);
      tasksContainer.appendChild(li);
    });
  }
  togglePtoTextArea = (task) => {
    const vertdots = task.parentNode.nextSibling.firstChild;
    const delSym = vertdots.nextSibling;
    const arrayP = Array.from(document.querySelectorAll('.pTask'));
    const indexTask = arrayP.indexOf(task);
    const value = task.innerText;
    const textArea = task.nextSibling;
    task.classList.toggle('dNone');
    textArea.classList.toggle('dNone');
    vertdots.classList.toggle('dNone');
    delSym.classList.toggle('dNone');
    textArea.value = value;
    return [textArea, indexTask, delSym];
  }
  updateTask = (element, index, butt) => {
    this.taskArray[index].description = element.value;
    localStorage.setItem('Task_list', JSON.stringify(this.taskArray));
    element.classList.toggle('dNone');
    element.previousSibling.classList.toggle('dNone');
    butt.classList.toggle('dNone');
    butt.previousSibling.classList.toggle('dNone');
    this.displayList();
  }
}
