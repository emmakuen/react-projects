export const makeTwoDigits = (number) => {
  return !number
    ? ""
    : number.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
};
