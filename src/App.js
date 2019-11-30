import React from 'react';

import { Timeline } from './Components/Timeline';

const App = () => {
  const events = [
    {
      id: 1,
      year: 2019,
      month: 'January',
      tech: ['git', 'heroku', 'aws', 'serverless', 'elm'],
      link: 'https://github.com',
      description: 'There was once upon a time a great warrior named Johnsson',
      thumbnail:
        'https://placebear.com/500/300',
      images: [
        'https://placebear.com/500/300',
        'https://placebear.com/500/300',
      ],
    },
    {
      id: 2,
      year: 2019,
      month: 'January',
      tech: ['git', 'heroku', 'aws', 'serverless', 'elm'],
      link: 'https://github.com',
      description: 'There was once upon a time a great warrior named Johnsson',
      thumbnail:
        'https://placebear.com/500/300',
      images: [
        'https://placebear.com/500/300',
        'https://placebear.com/500/300',
      ],
    },
  ];
  return (
    <div className="App">
      <Timeline events={events.filter(e => !e.muted)} />
    </div>
  );
};

export default App;
