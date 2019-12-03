import React from 'react';

import { eventData } from './data/events';
import { Timeline } from './Components/Timeline';
import { BubbleScreen } from './Components/Bubbles';
import { Menu } from './Components/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <BubbleScreen />
      <Timeline events={eventData} />
    </div>
  );
};

export default App;
