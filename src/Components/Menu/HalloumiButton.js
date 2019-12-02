import React, { useState } from 'react';

import styled from 'styled-components';
import { size } from '../../utils/styles';

const HalloumiBurger = styled.span`
  position: fixed;
  right: 15px;
  padding: 0;
  bottom: 15px;
  z-index: 10;
  width: 40px;
  height: 40px;
  transition: transform 0.2s;
  transform: ${props => (props.isOpen ? `rotate(${props.direction}deg)` : '')};

  & > * {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  @media ${size.medium} {
    &:hover {
      transform: ${props => `rotate(${props.direction}deg)`};
    }
  }
`;

const Bread = styled.svg`
  color: #0a0a0a;
  display: inline-block;
  stroke: #fff8f6;
  height: 100%;
  width: 100%;
  transition: transform 0.2s, -webkit-transform 0.2s;
  cursor: pointer;
`;

const HalloumiFilling = styled.line`
  transform-origin: 0px 0px;
  transition: all 0.2s;
  stroke-width: 2px;
`;

const Top = styled(HalloumiFilling)`
  transform: ${props => (props.isOpen ? 'rotate(45deg)' : '')};

  @media ${size.medium} {
    ${HalloumiBurger}:hover & {
      transform: ${props =>
        props.isOpen ? 'rotate(45deg)' : 'rotate(-45deg)'};
    }
  }
`;
const Middle = styled(HalloumiFilling)``;

const Bottom = styled(HalloumiFilling)`
  transform: ${props => (props.isOpen ? 'rotate(-45deg)' : '')};

  @media ${size.medium} {
    ${HalloumiBurger}:hover & {
      transform: ${props =>
        props.isOpen ? 'rotate(-45deg)' : 'rotate(45deg)'};
    }
  }
`;

export const HalloumiButton = ({
  isOpen,
  onClick,
  arrowDirection = 0,
} = {}) => {
  return (
    <HalloumiBurger isOpen={isOpen} direction={arrowDirection}>
      <Bread viewBox="-5 -6 10 12" onClick={onClick}>
        <Top isOpen={isOpen} x1="-4" y1="-3" x2="4" y2="-3"></Top>
        <Middle isOpen={isOpen} x1="-4" y1="0" x2="4" y2="0"></Middle>
        <Bottom isOpen={isOpen} x1="-4" y1="3" x2="4" y2="3"></Bottom>
      </Bread>
    </HalloumiBurger>
  );
};
