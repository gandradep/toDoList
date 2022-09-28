/* eslint-disable import/prefer-default-export */
const list = document.getElementById('list');
export const iterate = (arr) => {
  const liTitle = document.createElement('li');
  liTitle.classList.add('dFlex', 'justBetween', 'borderBottom', 'pad10_5');
  const title = document.createElement('p');
  title.innerText = "Today's To Do";
  const refresh = document.createElement('i');
  refresh.classList.add('fa-solid', 'fa-arrows-rotate');
  const liInput = document.createElement('li');
  liInput.classList.add('borderBottom', 'posRelative');
  const input = document.createElement('input');
  input.classList.add('w100', 'pad10_5', 'littlePadLeft', 'italic');
  input.placeholder = 'Add to your list...';
  const enterSymbol = document.createElement('i');
  enterSymbol.classList.add('fa-solid', 'fa-arrow-turn-down', 'rotate');
  // input.append(enterSymbol);
  liInput.append(input, enterSymbol);
  liTitle.append(title, refresh);
  list.append(liTitle, liInput);

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
