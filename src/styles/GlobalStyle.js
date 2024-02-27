import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    width: 100%;
    overflow-x: hidden; // Prevent horizontal scroll
    font-family: 'Nunito Sans', sans-serif; // Default font for body text
    font-size: 16px; // Default font size
    color: ${({ theme }) => theme.colors.textDark}; // Default text color
    background-color: ${({ theme }) => theme.colors.primaryLight}; // Optional: Background color
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Nunito', sans-serif; // Nunito for headings
    font-weight: 500; 
    margin-bottom: 0.5em; // Add spacing below headings
  }
  

  button, input, select, textarea {
    font-family: inherit; // Ensure form elements inherit the body font

    min-width: 1.5rem;
  min-height: 1.5rem;
  padding: 0.75rem; /* Adjust padding as needed */
  }

  a {
   
    color: inherit; // Links inherit text color
    text-decoration: none; // Optional: No underline on links
    min-width: 1.5rem;
  min-height: 1.5rem;
  padding: 0.75rem; /* Adjust padding as needed */
  }

  // Accessibility improvements:
  // Ensure that focusable elements have a visible focus style
  :focus {
    outline: 2px dashed ${({ theme }) => theme.colors.secondaryDark};
    outline-offset: 2px;
  }
`;

export const theme = {
  colors: {
    primaryLight: '#FFC700', // Yellow
    primaryDark: '#25094B',  // Purple
    secondaryLight: '#EED56B', // Light Yellow
    secondaryDark: '#009595',  // Turquoise
    textLight: '#FFFFFF',
    textDark: '#333333',
    ctaBg: '#F500C6', // Pink
    ctaContrast: '#FFFFFF', // White
    // Add more colors as needed
  },
  fonts: {
    primary: "'Nunito', sans-serif", // For headings, UI elements with character
    secondary: "'Nunito Sans', sans-serif", // For body text, straightforward communication
  },
  breakpoints: {
    mobile: '320px',
    largermobilescreen: '375px',
    tablet: '768px',
    desktop: '1024px',
    largeDesktop: '1440px',
  },
};

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const InnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

/* export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.primary}; // Use Nunito for header text
`; */

export const CTAButton = styled.button`
  background: ${({ theme }) => theme.colors.secondaryLight};
  color: ${({ theme }) => theme.colors.textDark};
  border: none;
  padding: 1.5rem 2rem;
  font-size: 1rem; // Start with mobile font size
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  margin: 2rem; // Spacing from the last element

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.textLight};
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.primaryLight};
  }
`;

