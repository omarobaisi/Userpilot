import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/user.context';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      white: '#ffffff',
      gray: '#363740',
      lightGray: '#9FA2B4',
      blue: '#2050AD',
    },
    text: {
      main: '#252733',
      gray: '#A4A6B3',
    },
  },
  size: {
    small: '18px',
    meduim: '20px',
    large: '25px',
  },
  weight: {
    bold: 800,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();