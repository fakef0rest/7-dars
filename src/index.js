import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ValueProvider } from './contexts/Value';
import { ThemeProvider } from './contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ValueProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ValueProvider>
  </React.StrictMode>
);
