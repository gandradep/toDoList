/* eslint-disable import/prefer-default-export */
const list = document.getElementById('taskList');
export const iterate = (arr) => {

  arr.forEach((element) => {
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
    list.appendChild(li);
  });

  const clearComplete = document.createElement('li');
  clearComplete.innerText = 'Clear all completed';
  clearComplete.classList.add('clearAll', 'pad10_5');
  list.appendChild(clearComplete);
};
