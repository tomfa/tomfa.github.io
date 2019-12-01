import React from 'react';

import styled from 'styled-components';

import FullScreen from './FullScreen';
import { AwesomeSVG } from './AwesomeSVG';
import { useWindowSize } from '../hooks';

const FixedBottomLink = styled.a`
  color: white;
  text-decoration: none;
  position: absolute;
  left: 0;
  bottom: 10px;
  text-align: center;
  width: 100%;
  margin-bottom: 0.2rem;
  transition: transform 0.5s;

  &::after {
    content: '▼';
    margin: 0 10px;
  }

  &:hover {
    transform: translateY(-0.3rem);
  }
`;

const Label = styled.h3`
  font-family: 'Lato', Calibri, Arial, sans-serif;
  font-size: 1.25rem;
  display: inline;
  
`;

export const TopScreen = () => {
  const size = useWindowSize();

  return <FullScreen>
    <AwesomeSVG width={size.width} height={size.height} />
    <FixedBottomLink href="#timeline">
      <Label>Side projects</Label>
    </FixedBottomLink>
  </FullScreen>
};
