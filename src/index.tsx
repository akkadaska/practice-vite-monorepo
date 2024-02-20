import { Fruit } from '@practice-vite-monorepo/fruit';
import React from 'react';
import { createRoot } from 'react-dom/client';
import '@practice-vite-monorepo/fruit/dist/style.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>App</h1>
      <p>
        This is an <Fruit />.
      </p>
    </div>
  );
};

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(<App />);
}
