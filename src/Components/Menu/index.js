import React, { useState } from 'react';

import { HalloumiButton } from './HalloumiButton';
import { SideBar } from './SideBar';

export const Index = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <HalloumiButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} arrowDirection={45} />
      <SideBar visible={isOpen} />
    </>
  );
};
