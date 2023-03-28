import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import 'typeface-lobster';
import 'typeface-open-sans';
import { ParallaxProvider } from 'react-scroll-parallax';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);

