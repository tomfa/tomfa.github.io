import React from 'react';
import styled from 'styled-components';

import { size } from '../styles';

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
`;

const ProjectTypeBadge = styled(Badge)`
  border-color: #e2deff;
`;

const LibraryBadge = styled(Badge)`
  border-color: #fffc9e;
`;

const LanguageBadge = styled(Badge)`
  border-color: #679943;
`;

const PlatformBadge = styled(Badge)`
  border-color: #93cc6a;
`;

const DeploymentBadge = styled(Badge)`
  border-color: #6a78cc;
`;

const TechBadge = ({ category, label }) => {
  const badgeMapping = {
    projectType: ProjectTypeBadge,
    library: LibraryBadge,
    language: LanguageBadge,
    platform: PlatformBadge,
    deployment: DeploymentBadge,
  };

  const Component = badgeMapping[category];
  if (!Component) {
    console.log(label, category);
  }
  return <Component>{label}</Component>;
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
        .sort((a, b) => a.label.length - b.label.length)
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
