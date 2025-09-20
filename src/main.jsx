import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';


// 👉 Monetag Service Worker register
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js') // Monetag sw.js from public folder
      .then((registration) => {
        console.log('Monetag Service Worker registered:', registration);
      })
      .catch((error) => {
        console.log('Monetag Service Worker registration failed:', error);
      });
  });
}

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
