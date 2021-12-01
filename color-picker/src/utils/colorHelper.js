import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

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
    let scale = generateScale(colorInfo.color, 10).reverse();
    for (let item in scale) {
      newPalette.colors[levels[item]].push({
        name: `${colorInfo.name} ${levels[item]}`,
        id: colorInfo.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[item],
        rgb: chroma(scale[item]).css(),
        rgba: chroma(scale[item])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
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

export { generatePalette };
