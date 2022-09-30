/* eslint-disable import/prefer-default-export */
export const clearComplete = (arr) => {
  const filtered = arr.filter((elem) => elem.completed === false);
  localStorage.setItem('Task_list', JSON.stringify(filtered));
};
