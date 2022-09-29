/* eslint-disable import/prefer-default-export */
export const listFooter = () => {
  const clearComplete = document.createElement('li');
  clearComplete.innerText = 'Clear all completed';
  clearComplete.classList.add('clearAll', 'pad10_5');
  return clearComplete;
};
