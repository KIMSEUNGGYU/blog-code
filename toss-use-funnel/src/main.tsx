import React from 'react';
import ReactDOM from 'react-dom/client';

import { worker } from '@/server/browser.ts';
import App from './App.tsx';
import './index.css';

worker.start();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
