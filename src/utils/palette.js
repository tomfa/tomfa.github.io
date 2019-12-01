import { useState } from 'react';

export const usePalette = () => {
  const colorPalettes = [
    ['#110133', '#00918e', '#4dd599', '#ffdc34'],
    ['#ffa259', '#fe6845', '#fa4252', '#91bd3a'],
    ['#561f55', '#8b2f97', '#cf56a1', '#fcb2bf'],
    ['#dff6f0', '#46b3e6', '#4d80e4', '#2e279d'],
    ['#f8b195', '#f67280', '#4d80e4', '#6c5b7b'],
    ['#39375b', '#745c97', '#d597ce', '#f5b0cb'],
    ['#9be3de', '#beebe9', '#fffdf9', '#ffe3ed'],
    ['#eafbea', '#6f9a8d', '#1f6650', '#ea5e5e'],
  ];

  const getRandomPalette = () => {
    return colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
  };
  const [palette, setPalette] = useState(getRandomPalette());
  const setPaletteOrRandom = palette =>
    palette ? setPalette(getRandomPalette()) : setPalette(palette);

  return [palette, setPaletteOrRandom];
};
