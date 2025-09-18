import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 👉 Service Worker Register
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("🔄 New content available. Reload now?")) {
      updateSW(true)
    }
  },
  onOfflineReady() {
    console.log("✅ App ready to work offline")
  }
})

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
