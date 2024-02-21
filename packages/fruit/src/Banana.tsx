import React from 'react';
import './Banana.scss';
import { v4 as uuid } from 'uuid';

export const Banana: React.FC = () => {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Banana mounted');
    return () => {
      // eslint-disable-next-line no-console
      console.log('Banana unmounted');
    };
  });
  return <span className="fruit__banana">Banana 🍌(UUID: {uuid()})</span>;
};
