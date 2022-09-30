/* eslint-disable import/prefer-default-export */
export const listFooter = () => {
  const clearComplete = document.createElement('li');
  const buttonClear = document.createElement('button');
  buttonClear.innerText = 'Clear all completed';
  buttonClear.classList.add('pad10_5', 'clearAll');
  clearComplete.setAttribute('id','buttonClear');
  clearComplete.classList.add('clearAll');
  clearComplete.appendChild(buttonClear);
  return clearComplete;
};
