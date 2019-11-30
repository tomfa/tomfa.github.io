import React from 'react';

import styled from 'styled-components';

import FullScreen from './FullScreen';

const FixedBottomLink = styled.a`
  color: white;
  text-decoration: none;
  position: absolute;
  left: 0;
  bottom: 0;
  text-align: center;
  width: 100%;
  margin-bottom: 0.2rem;
  transition: transform 0.5s;
  font-family: monospace;
    
  &::after {
    content: '▼';
    margin: 0 10px;
  }
  
  &:hover {
    transform: translateY(-0.3rem);
  }
`;

const TerminalText = styled.h3`
  font-size: 1.25rem;
  display: inline;
`;

export const TopScreen = () => (
  <FullScreen>
    <FixedBottomLink href="#timeline">
      <TerminalText>projects</TerminalText>
    </FixedBottomLink>
  </FullScreen>
);
