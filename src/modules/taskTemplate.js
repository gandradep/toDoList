/* eslint-disable import/prefer-default-export */
export class TaskTemplate {
  constructor(task, completed, index) {
    this.description = task;
    this.completed = completed;
    this.index = index;
  }
}
