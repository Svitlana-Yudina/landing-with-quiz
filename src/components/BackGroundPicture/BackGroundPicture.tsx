import React from 'react';
import styles from './BackGroundPicture.module.scss';

export const BackGroundPicture: React.FC = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.gradient}></div>
    </div>
  );
}
