import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import * as serviceWorkerRegistration from "./serviceWorkerRegistration.jsx"

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ✅ Service worker register করা হলো
serviceWorkerRegistration.register();
