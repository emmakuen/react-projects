import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const numberOfColors = 10;

const generatePalette = (starterPalette) => {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let colorInfo of starterPalette.colors) {
    let scale = generateScale(colorInfo.color, numberOfColors).reverse();
    for (let idx in scale) {
      newPalette.colors[levels[idx]].push({
        name: `${colorInfo.name} ${levels[idx]}`,
        id: colorInfo.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[idx],
        rgb: chroma(scale[idx]).css(),
        rgba: chroma(scale[idx])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }

  return newPalette;
};

const generateSingleColorPalette = (color) => {
  let newPalette = {
    paletteName: color.name,
    id: color.color,
    colors: {},
  };

  let scale = generateScale(color.color, numberOfColors).reverse();
  for (let idx in scale) {
    if (parseInt(idx) !== 0) {
      newPalette.colors[levels[idx]] = {
        name: `${color.name} ${levels[idx]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[idx],
        rgb: chroma(scale[idx]).css(),
        rgba: chroma(scale[idx])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      };
    }
  }

  return newPalette;
};

const getRange = (hexColor) => {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
};

const generateScale = (hexColor, numberOfColors) => {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
};

const findPalette = (seedPalettes, id) => {
  return seedPalettes.find((palette) => palette.id === id);
};

const findColor = (seedPalette, name) => {
  return seedPalette.colors.find(
    (color) => color.name.toLowerCase() === name.toLowerCase()
  );
};

const formatLightColor = (props) => {
  return chroma(props.formattedColor).luminance() >= 0.5
    ? "rgba(0, 0, 0, 0.65)"
    : "rgba(255, 255, 255, 0.8)";
};

const generateRandomColor = (seedPalettes) => {
  const allColors = seedPalettes.map((palette) => palette.colors).flat();
  const randomIndex = Math.floor(Math.random() * allColors.length);
  const randomColor = allColors[randomIndex];
  return randomColor;
};

export {
  generatePalette,
  findPalette,
  generateSingleColorPalette,
  findColor,
  formatLightColor,
  generateRandomColor,
};
