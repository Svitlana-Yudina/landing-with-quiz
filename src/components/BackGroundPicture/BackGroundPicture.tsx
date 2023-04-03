import classNames from 'classnames';
import React from 'react';
import styles from './BackGroundPicture.module.scss';
import { ButtonStyles } from '../../types/types';

type Props = {
  type: ButtonStyles,
};

export const BackGroundPicture: React.FC<Props> = ({ type }) => {
  return (
    <div
      className={classNames(
        styles.bg,
        styles[type],
      )}>
      <div className={styles.gradient}></div>
    </div>
  );
}
