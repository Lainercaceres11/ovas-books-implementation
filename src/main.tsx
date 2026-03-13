import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@router/router';

import 'virtual:uno.css';
import '@shared/styles/index.css';

import 'books-ui/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
