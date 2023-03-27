import classNames from 'classnames';
import React from 'react';
import styles from './BackGroundPicture.module.scss';

export const BackGroundPicture: React.FC = () => {
  return (
    <div className={classNames(
      styles.bg,
      // styles.quiz,
    )}>
      <div className={styles.gradient}></div>
    </div>
  );
}
