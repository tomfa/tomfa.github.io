import React from 'react';
import styled from 'styled-components';

import { size } from '../styles';

import './Timeline.css';

import { ImageCarousell } from './ImageCarousell';

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

const EventDescription = styled.p`
  font-size: 1rem;
  color: #dddddd;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 1rem;
  padding-right: 1rem;
  
  &:first-of-type {
    padding-top: 0.8rem;
  }
`;

const Content = ({ event }) => (
  <div className="m-event-block">
    <ImageCarousell
      key={event.id}
      thumbnail={event.thumbnail}
      images={event.images}
    />
    <EventDescription>{event.description}</EventDescription>
  </div>
);

const TimelineList = styled.ul`
  margin: 0.5rem 0 0 0;
  padding: 0;
  list-style: none;
  position: relative;

  /* The line */
  @media ${size.large} {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 4px;
      background: #757575;
      left: 25%;
      margin-left: -37px;
    }
  }
`;

const TimelineListItem = styled.li`
  position: relative;
  margin-top: 1rem;

  @media ${size.large} {
    margin-top: 4rem;
  }
`;

export const Timeline = ({ events }) => (
  <div>
    <TimelineList>
      {events.map((event, i) => (
        <TimelineListItem key={i}>
          <TimeStamp month={event.month} year={event.year} />
          <TechBadges technologies={event.tech} />
          <Icon />
          <Content event={event} />
        </TimelineListItem>
      ))}
    </TimelineList>
  </div>
);
