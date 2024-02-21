import React from 'react';
import './Apple.scss';
import { v4 as uuid } from 'uuid';

export const Apple: React.FC = () => {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Apple mounted');
    return () => {
      // eslint-disable-next-line no-console
      console.log('Apple unmounted');
    };
  });
  return <span className="fruit__apple">Apple 🍎(UUID: {uuid()})</span>;
};
