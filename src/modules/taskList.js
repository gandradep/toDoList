/* eslint-disable import/prefer-default-export */
import { TaskTemplate } from './taskTemplate.js';
export class TaskList {
  constructor() {
    this.taskArray = [];
  }

  addTask = (task, completed, index) => {
    const taskAdded = new TaskTemplate (task, completed, index);
    this.taskArray.push(taskAdded);
    localStorage.setItem('Task_list', JSON.stringify(this.taskArray));    
  }
}
