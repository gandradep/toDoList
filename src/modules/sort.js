export const sort = (arr) => {
  return arr.sort((a,b) => {
    return a.index - b.index;
  });
};
