export const moveItem = <T>(array: T[], from: number, to: number) => {
  const insertIndex = to < 0 ? array.length + to : to;
  // remove the item and save it to a variable
  const item = array.splice(from, 1)[0];
  // insert the item at insertIndex
  array.splice(insertIndex, 0, item);

  return array;
};
