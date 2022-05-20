import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../components/styles/styles.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #121214;
    scroll-behavior: smooth;
  }

  html { 
    font-family: 'DM Mono', monospace;
  }

`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
