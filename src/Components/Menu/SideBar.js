import React from 'react';

import styled from 'styled-components';
import { size } from '../../utils/styles';
import { GitHubIcon, LinkedInIcon, InstagramIcon, ExternalIcon } from './Icons';

const SideBarWrap = styled.nav`
  padding: 20px;
  position: fixed;
  line-height: 1.4rem;
  left: 100vw;
  bottom: -100vh;
  background-color: rgba(0, 0, 0, 1);
  min-width: 100vw;
  transition: transform 0.4s;
  z-index: 8;
  transform: ${props =>
    props.visible ? 'translateX(-100%) translateY(-100vh)' : ''};

  @media ${size.medium} {
    background-color: rgba(0, 0, 0, 1);
    min-width: 480px;
  }
`;

const SocialMediaLink = styled.a`
  display: inline-block;
  margin-right: 1.3rem;
  color: white;
  transition: transform 0.3s;

  svg {
    fill: white;
  }

  &:hover {
    @media ${size.medium} {
      transform: translateY(3px);
    }
  }
`;

const SocialMedia = styled.div`
  margin-top: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  line-height: 1.5rem;
  color: #0d82e8;
`;

const LinkText = styled.span`
  margin-right: 5px;
`;

const Title = styled.h1`
  margin-top: 0.5rem;
`;

export const SideBar = ({ visible }) => {
  return (
    <SideBarWrap visible={visible}>
      <Title>Bouncing bubbles</Title>
      <p>Click on the bubbles: they change position, radius, or colors.</p>
      <p>
        {' '}
        Note that they converge towards the middle if you spam click, even
        though the new positions are random. Why is that?
      </p>
      <p>
        A few other side projects are found below, and there's random notes at my{' '}
        <Link href="http://notes.webutvikling.org">
          <LinkText>personal blog</LinkText>
          <ExternalIcon size={14} color="#0d82e8" />
        </Link>
      </p>
      <SocialMedia>
        <h3>Find me at:</h3>
        <SocialMediaLink title="GitHub" href="https://github.com/tomfa">
          <GitHubIcon />
        </SocialMediaLink>
        <SocialMediaLink
          title="LinkedIn"
          href="https://linkedin.com/in/fagerbekk">
          <LinkedInIcon />
        </SocialMediaLink>
        <SocialMediaLink
          title="Instagram"
          href="https://www.instagram.com/tomastrollet/">
          <InstagramIcon />
        </SocialMediaLink>
      </SocialMedia>
    </SideBarWrap>
  );
};
