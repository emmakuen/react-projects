export const convertToAbsPercentage = (num) => {
  if (!num || typeof num !== "number") return "";
  return String(Math.abs(Math.round(num * 1000) / 10)) + "%";
};
