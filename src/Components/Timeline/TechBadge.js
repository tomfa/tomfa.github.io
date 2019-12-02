import React from 'react';
import styled from 'styled-components';

import { size } from '../../utils/styles';
import { usePalette } from '../../utils/palette';

const BadgesWrapper = styled.div`
  display: none;
  width: 25%;
  padding-right: 70px;
  position: absolute;
  bottom: 0;
  font-size: 0.8rem;
  cursor: pointer;
  transition: filter 0.5s;
  filter: brightness(0.6);

  &:hover {
    filter: brightness(1);
  }

  @media ${size.large} {
    display: block;
  }
`;

const Badge = styled.span`
  display: block;
  color: #dddddd;
  font-weight: 200;
  margin-top: 4px;
  padding: 2px;
  text-align: right;
  padding-right: 0.5rem;
  border-width: 0;
  border-right-width: 1rem;
  border-style: solid;
  border-color: ${props => props.color || '#dddddd'};
`;

const TechBadge = ({ category, label }) => {
  const [palette] = usePalette();
  const color = {
    projectType: palette[0],
    library: palette[1],
    language: palette[2],
    platform: palette[3],
  }[category];

  return <Badge color={color}>{label}</Badge>;
};

export const TechBadges = ({ technologies }) => {
  const badges = [];
  Object.entries(technologies).forEach(([key, values]) => {
    if (typeof values === 'string') {
      values = [values];
    }
    values.forEach(value => badges.push({ category: key, label: value }));
  });
  return (
    <BadgesWrapper>
      {badges
        .sort((a, b) => {
          if (a.category < b.category) {
            return -1;
          }
          if (a.category > b.category) {
            return 1;
          }
          return 0;
        })
        .map(tech => (
          <TechBadge
            key={tech.label}
            category={tech.category}
            label={tech.label}
          />
        ))}
    </BadgesWrapper>
  );
};
