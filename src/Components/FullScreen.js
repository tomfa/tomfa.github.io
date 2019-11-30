import React from 'react';
import styled from 'styled-components';

import { size } from './styles';

const FullscreenWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  @media ${size.large} {
    overflow: hidden;
  }
`;

const InnerFullScreen = styled.div`
  vertical-align: middle;
  width: 100%;
`;

const FullScreen = ({ children, results = [] }) => (
  <FullscreenWrapper>
    <InnerFullScreen>{children}</InnerFullScreen>
  </FullscreenWrapper>
);

export default FullScreen;
