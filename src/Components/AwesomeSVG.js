import React, { useState } from 'react';
import styled from 'styled-components';

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
  const palette =
    colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
  return [...palette, ...palette, ...palette];
};

const getRandomSizeDistrubution = ({ width, height, palette }) => {
  const numCircles = palette.length;
  const maxRadius = Math.floor((2 * Math.min(width, height)) / numCircles);
  const minRadius = Math.floor(maxRadius / 8);
  return palette.map(
    () => minRadius + Math.floor(Math.random() * (maxRadius - minRadius))
  );
};

const getRandomPositions = ({ width, height, radiuses }) => {
  return radiuses.map(radius => [
    Math.floor(Math.random() * width),
    Math.floor(Math.random() * height),
  ]);
};

const SVGCircle = styled.circle`
  transition: all 1.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const AwesomeSVG = ({ width, height }) => {
  const [palette, setPalette] = useState(getRandomPalette());
  const [radiuses] = useState(
    getRandomSizeDistrubution({ width, height, palette })
  );
  const [positions, setPositions] = useState(
    getRandomPositions({ width, height, radiuses })
  );

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      {positions.map(([cx, cy], i) => (
        <SVGCircle
          key={i}
          transform={`translate(${cx}, ${cy})`}
          r={radiuses[i]}
          stroke="#212121"
          strokeWidth="1"
          fill={palette[i]}
          onClick={() => {
            setPositions(getRandomPositions({ width, height, radiuses }));
            if (Math.random() > 0.93) {
              setPalette(getRandomPalette());
            }
          }}
        />
      ))}
    </svg>
  );
};
