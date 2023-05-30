import React, { memo } from 'react';
import styles from './Button.module.scss';

const Button = () => {
  return (
    <button className={styles.butt} onClick={() => {
      if ('serviceWorker' in navigator) {
        // window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then(registration => {
            // eslint-disable-next-line no-console
            console.log('Service Worker is registered! ', registration.scope);
          })
          .catch(err => {
            // eslint-disable-next-line no-console
            console.log('Registration failed  ', err);
          });
        // });
      }
    }
    }>hello</button>
  );
};

export default memo(Button);
