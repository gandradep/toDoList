export const clearComplete = (arr) =>{
  const filtered = arr.filter((elem) => {
    return elem.completed == false;
  });

  localStorage.setItem('Task_list', JSON.stringify(filtered));
  console.log(filtered);

}
