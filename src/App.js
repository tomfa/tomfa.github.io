import React from 'react';

import { Timeline } from './Components/Timeline';
import { TopScreen } from './Components/TopScreen';

const App = () => {
  const events = [
    {
      year: 2019,
      month: 'November',
      tech: {
        language: ['JS', 'SVG'],
        deployment: 'Github Pages',
        library: 'React',
        projectType: 'Personal',
      },
      link: 'https://github.com/tomfa/tomfa.github.io',
      thumbnail: '/images/tomfa.github.io.png',
      description: 'Personal home page with SVG animations and event timeline',
    },
    {
      year: 2018,
      month: 'November',
      tech: {
        language: 'Python',
        platform: 'AWS',
        library: ['Terraform', 'Django'],
        projectType: 'Meetup',
      },
      link: 'https://github.com/tomfa/graphy',
      thumbnail: '/images/graphql.png',
      description: 'GraphQL talk at Python meetup held by at Kolonial',
    },
    {
      year: 2017,
      month: 'September',
      tech: {
        language: 'JS',
        library: ['Node', 'Hubot'],
        projectType: 'Conference workshop',
      },
      link: 'https://github.com/bekk/chatops-workshop',
      thumbnail: '/images/chatops-workshop.png',
      description: 'Chatops workshop held at JavaZone 2017',
    },
    {
      year: 2017,
      month: 'August',
      tech: {
        language: 'JS',
        library: ['Node', 'Hubot', 'Slack'],
        projectType: 'Personal project',
      },
      link: 'https://github.com/tomfa/botanist',
      thumbnail: '/images/botanist.png',
      description: 'Slack bot: Reporting on Sentry, Github++',
    },
    {
      year: 2017,
      month: 'April',
      tech: {
        projectType: 'Full-time job',
      },
      link: 'https://www.otovo.no',
      thumbnail: '/images/otovo.png',
      description: 'Started full time job as Software Engineer',
      muted: true,
    },
    {
      year: 2016,
      month: 'November',
      tech: {
        deployment: 'Github Pages',
        platform: 'AWS',
        library: ['S3', 'Cloudfront'],
        projectType: 'Workshop',
      },
      link: 'https://github.com/tomfa/aws-frontend-workshop',
      thumbnail: '/images/workshop-aws-frontend.png',
      title: 'AWS frontend workshop',
      description: 'Workshop held at Bekk consulting on deploying on AWS',
    },
    {
      year: 2016,
      month: 'August',
      tech: {
        platform: 'Heroku',
        language: ['JS', 'MongoDB'],
        library: ['Node', 'React', 'PWA'],
        projectType: 'Personal project',
      },
      link: 'https://www.dutytime.org',
      thumbnail: '/images/dutytime.png',
      title: 'Progressive Web app: Dutytime',
      description: 'Gamified progressive web app for tracking household chores',
    },
    {
      year: 2016,
      month: 'November',
      tech: {
        language: 'Bash',
        platform: ['Github Pages', 'Heroku'],
        projectType: 'Personal project',
      },
      link: 'https://tomfa.github.io/herango-bash',
      thumbnail: '/images/herango.png',
      description: 'Bash script for quickly setting up a web app',
    },
    {
      year: 2015,
      month: 'August',
      tech: {
        projectType: 'Full-time job',
      },
      link: 'https://www.bekk.no',
      thumbnail: '/images/bekk.png',
      description: 'Started first full time job as Consultant',
      muted: true,
    },
    {
      year: 2015,
      month: 'May',
      tech: {
        language: ['JS', 'C'],
        library: ['Bluetooth', 'Arduino'],
        projectType: 'Master thesis',
      },
      link: 'https://github.com/tomfa/anyboardjs',
      thumbnail: '/images/anyboard.jpg',
      description: 'Wrote master thesis on digital boardgames',
    },
    {
      year: 2015,
      month: 'August',
      tech: {
        projectType: 'Part-time job',
      },
      link: 'https://www.jrc.no',
      thumbnail: '/images/jrc.png',
      description: 'Part time job in student start-up, 2013 - 2015',
      muted: true,
    },
    {
      year: 2014,
      month: 'August',
      tech: {
        language: ['JS', 'Python'],
        library: ['jQuery', 'Django'],
        projectType: 'Paid project',
      },
      thumbnail: '/images/iraki.png',
      link: 'https://www.irakinutrition.com/',
      description: 'Created home page for nutritionist',
    },
    {
      year: 2014,
      month: 'February',
      tech: {
        language: ['HTML', 'CSS', 'JS'],
        library: ['jQuery'],
        projectType: 'Paid project',
      },
      thumbnail: '/images/live-crowdfunding.png',
      images: ['/images/live-crowdfunding.png', '/images/live-crowdfunding-2.png', '/images/live-crowdfunding-3.png'],
      description: 'Created signup page for Technoport 2014 crowdfunding event',
    },
    {
      year: 2013,
      month: 'April',
      tech: {
        language: ['HTML', 'CSS', 'JS'],
        deployment: 'WebFaction',
        projectType: 'Personal project',
      },
      link: 'http://www.webutvikling.org/tekled/',
      thumbnail: '/images/tekled.png',
      title: 'Tekled: Educational quiz',
      description: 'Educational quizes for a simpler exam study',
    },
    {
      year: 2013,
      month: 'February',
      tech: {
        language: ['HTML', 'CSS'],
        library: 'jQuery',
        deployment: 'WebFaction',
        projectType: 'Personal project',
      },
      link: 'https://github.com/tomfa/ababrygg',
      thumbnail: '/images/ababrygg.png',
      title: 'Ababrygg: Students brewing beer',
      description: 'Static page for a student group',
    },
  ].map((e, i) => {
    e.id = i;
    return e;
  });
  return (
    <div>
      <TopScreen />
      <Timeline events={events.filter(e => !e.muted)} />
    </div>
  );
};

export default App;
