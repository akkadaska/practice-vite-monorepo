import React from 'react';
import './Fruit.scss';
import { v4 as uuid } from 'uuid';

export const Fruit: React.FC = () => {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Fruit mounted');
    return () => {
      // eslint-disable-next-line no-console
      console.log('Fruit unmounted');
    };
  });
  return <span className="fruit__text">Apple 🍎(UUID: {uuid()})</span>;
};
