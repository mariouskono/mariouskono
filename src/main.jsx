import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeProvider.jsx'; // Import Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Bungkus App dengan ThemeProvider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);