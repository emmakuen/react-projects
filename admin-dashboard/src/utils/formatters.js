export const convertToAbsPercentage = (num) => {
  if (!num || typeof num !== "number") return "";
  return String(Math.abs(Math.round(num * 1000) / 10)) + "%";
};

export const convertToDate = (str) => {
  if (!str) return null;

  return new Date(str).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
