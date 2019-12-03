import React from 'react';
import styled from 'styled-components';

import { size } from '../../utils/styles';

const BadgesWrapper = styled.div`
  display: block;
  text-align: right;
  bottom: 0;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;

  @media ${size.large} {
    width: 25%;
    padding-right: 70px;
    position: absolute;
    margin-bottom: 0;
  }
`;

const Badge = styled.span`
  display: inline-block;
  color: #dddddd;
  font-weight: 200;
  margin-bottom: 4px;
  padding: 2px;
  text-align: right;
  padding-left: 0.5rem;
  padding-right: 1rem;
  border-width: 0;
  border-left-width: 1rem;
  border-style: solid;
  border-color: ${props => props.color || '#dddddd'};

  @media ${size.large} {
    padding-left: 0;
    padding-right: 0.5rem;
    margin-bottom: 0px;
    margin-top: 4px;
    border-left-width: 0;
    border-right-width: 1rem;
    display: block;
  }
`;

const sortTech = (a, b) => {
  if (a.category < b.category) {
    return -1;
  }
  if (a.category > b.category) {
    return 1;
  }
  return 0;
};

export const TechBadges = ({ technologies }) => {
  const colorMap = {
    projectType: '#eafbea',
    library: '#6f9a8d',
    language: '#1f6650',
    platform: '#ea5e5e',
  };

  const badges = [];
  Object.entries(technologies).forEach(([key, values]) => {
    if (typeof values === 'string') {
      values = [values];
    }
    values.forEach(value => badges.push({ category: key, label: value }));
  });
  return (
    <BadgesWrapper>
      {badges.sort(sortTech).map(tech => (
        <Badge key={tech.label} color={colorMap[tech.category]}>
          {tech.label}
        </Badge>
      ))}
    </BadgesWrapper>
  );
};
