import React from 'react';

import { Timeline } from './Components/Timeline';
import { TopScreen } from './Components/TopScreen';
import { eventData } from './data/events';

const App = () => {

  return (
    <div>
      <TopScreen />
      <Timeline events={eventData} />
    </div>
  );
};

export default App;
