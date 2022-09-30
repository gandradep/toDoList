export const checked = (element, listArr) => {
  const arrayBoxes = Array.from(document.querySelectorAll('.check'));
  const index = arrayBoxes.indexOf(element);
  listArr[index].completed = !listArr[index].completed;
  console.log(listArr[index].completed);
}
