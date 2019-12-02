import React from 'react';

import FullScreen from './FullScreen';
import { AwesomeSVG } from './AwesomeSVG';
import { useWindowSize } from '../hooks';

export const TopScreen = () => {
  const size = useWindowSize();

  return <FullScreen>
    <AwesomeSVG width={size.width} height={size.height} />
  </FullScreen>
};
