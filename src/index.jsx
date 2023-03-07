import { StrictMode } from 'react';
import './index.scss';
import { App } from './containers';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './context/CartContext/CartContext';
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
