import { ThemeProvider } from "styled-components";  // Import the ThemeProvider from styled-components
import { GlobalStyle, theme } from '../styles/GlobalStyle';  // Import the GlobalStyle and theme from the GlobalStyle file

export default function App({ Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>  {/* Wrap the entire app in the ThemeProvider */}
      <GlobalStyle />  {/* Apply the global styles */}
      <main>  {/* Wrap the main content in a main tag */}
        <Component {...pageProps} />  {/* Render the current page */}
      </main>
    </ThemeProvider>
  );
}
