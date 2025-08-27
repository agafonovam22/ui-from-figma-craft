import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DevPreviewShell } from './components/DevPreviewShell'

createRoot(document.getElementById("root")!).render(
  <DevPreviewShell>
    <App />
  </DevPreviewShell>
);
