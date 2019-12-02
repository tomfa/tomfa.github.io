import React, { useState } from 'react';
import styled from 'styled-components';
import { usePalette } from '../utils/palette';

const getRandomSizeDistrubution = ({ width, height, count }) => {
  const maxRadius = Math.floor((2 * Math.min(width, height)) / count);
  const minRadius = Math.floor(maxRadius / 8);
  return Array(count)
    .fill()
    .map(() => minRadius + Math.floor(Math.random() * (maxRadius - minRadius)));
};

const getRandomPositions = ({ width, height, count }) => {
  return Array(count)
    .fill()
    .map(radius => [
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
  const [palette, setPalette] = usePalette();
  const count = palette.length * 3;
  const [radiuses] = useState(
    getRandomSizeDistrubution({ width, height, count })
  );
  const [positions, setPositions] = useState(
    getRandomPositions({ width, height, count })
  );

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      {positions.map(([cx, cy], i) => (
        <SVGCircle
          key={i}
          cx={cx}
          cy={cy}
          r={radiuses[i]}
          stroke="#212121"
          strokeWidth="1"
          fill={palette[i % palette.length]}
          onClick={() => {
            setPositions(getRandomPositions({ width, height, count }));
            if (Math.random() > 0.93) {
              setPalette();
            }
          }}
        />
      ))}
    </svg>
  );
};
