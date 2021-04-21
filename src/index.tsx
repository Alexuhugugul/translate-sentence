import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const Glodal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.page{
  max-width: 1200px;
         margin-left: auto;
        margin-right: auto;
         height: 100vh;
}
`;

const theme = {
  media: {
    desktop: "(min-width:760px)"
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Glodal />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
