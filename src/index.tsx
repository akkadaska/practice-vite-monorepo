import React from 'react';
import { createRoot } from 'react-dom/client';
import { Apple } from '@fruit';
import '@fruit/styles/Apple.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>App</h1>
      <p>
        This is an <Apple />.
      </p>
    </div>
  );
};

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(<App />);
}
