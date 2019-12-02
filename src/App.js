import React from 'react';

import { Timeline } from './Components/Timeline';
import { TopScreen } from './Components/TopScreen';
import { eventData } from './data/events';
import { Menu } from './Components/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <TopScreen />
      <Timeline events={eventData} />
    </div>
  );
};

export default App;
