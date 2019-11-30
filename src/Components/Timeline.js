import React from 'react';

import './Timeline.css';

import { ImageCarousell } from './ImageCarousell';
import { withParagraphs } from './utils';

const TechBadges = ({ technologies }) => (
  <div className="m-event-tech">
    {technologies
      .sort((a, b) => a.length - b.length)
      .map(tech => (
        <span className={`a-tech-badge a-tech-badge-${tech}`}>{tech}</span>
      ))}
  </div>
);

const TimeStamp = ({ month, year }) => (
  <time className="m-event-date">
    <span className="a-event-date-month">{month}</span>
    <span className="a-event-date-year">{year}</span>
  </time>
);

const Icon = () => (
  <div className="a-event-icon">
    <svg width="20" height="20">
      <circle cx="10" cy="10" r="10" fill="#FFFFFF"></circle>
    </svg>
  </div>
);

const Content = ({ event }) => (
  <div className="m-event-block">
    {event.thumbnail && (
      <div key={event.id} className="a-image-wrapper">
        <ImageCarousell thumbnail={event.thumbnail} images={event.images} />
      </div>
    )}
    {withParagraphs(event.description, 'a-event-text')}
  </div>
);

const TimelineEvent = ({ event }) => (
  <li className="m-event">
    <TimeStamp month={event.month} year={event.year} />
    <TechBadges technologies={event.tech} />
    <Icon />
    <Content event={event} />
  </li>
);

export const Timeline = ({ title, events }) => (
  <div>
    <h3>{title}</h3>
    <ul className="b-timeline">
      {events.map(event => (
        <TimelineEvent key={event.id} event={event} />
      ))}
    </ul>
  </div>
);
