import { ThemeProvider } from "styled-components";
import TopNav from "../components/TopNav";
import { GlobalStyle, theme } from '../styles/GlobalStyle';
import Hero from "../components/Hero";

export default function Home() {
  return (
   <ThemeProvider theme={theme}>
    <GlobalStyle />
      <main >
        <TopNav />
        <Hero />
      
     
          
    </main>
    </ThemeProvider>
  );
}
