/* eslint-disable no-shadow */
import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <a
          href="/"
          className={styles.link}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Поддержка
        </a>
        <a
          href="/"
          className={styles.link}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          О нас
        </a>
        <a
          href="/"
          className={styles.link}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Контакты
        </a>
      </footer>
  );
};
