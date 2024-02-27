// components/HeroSection.js

import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  background-image: url(${({ bgimage }) => bgimage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: calc(-2rem + 1vw); */
 /*  max-width: 1200px; */
  width: 100%;

`;

const HeroHeadingBox = styled.div`
  /* background-color: ${({ theme }) => theme.colors.primaryDark}; */
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 




`;

const HeroHeading = styled.h1`
  font-size: 3rem; // Start with mobile font size
  color: white;
  margin: 1.3rem;
  padding: 2.5rem;
  
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4rem; // Increase font size for tablet
    margin: 1.5rem;
    padding: 2.8rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 5rem; // Increase font size for desktop
    margin: 2rem;
    padding: 3rem;
  }
`; 

const HeroSubheading = styled.h2`
  font-size: 1rem; // Start with mobile font size
  margin: 3.7rem;
  font-weight: 300;

  color: ${({ theme }) => theme.colors.textLight};

  @media (min-width: ${({ theme }) => theme.breakpoints.largermobilescreen}) {
    font-size: 1.5rem; // Increase font size for tablet
    margin: 1.5rem;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.9rem; // Increase font size for tablet
    margin: 1.8rem;
    
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 2.5rem; // Increase font size for desktop
    margin: 2.5rem;
  }
`;

const HeroSection = ({ headline, subheadline, bgimage }) => {
  return (
    <HeroWrapper bgimage={bgimage} aria-labelledby="hero-heading" aria-describedby="hero-subheading">
      <HeroContent>
        <HeroHeadingBox> 
          <HeroHeading id="hero-heading">{headline}</HeroHeading>
          <HeroSubheading id="hero-subheading">{subheadline}</HeroSubheading>
        </HeroHeadingBox>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;