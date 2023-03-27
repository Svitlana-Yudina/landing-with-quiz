import React from 'react';
import styles from './ToolTipText.module.scss';

type Props = {
  text: string;
};

export const ToolTipText: React.FC<Props> = ({ text }) => {
  return (
    <p className={styles.text}>
      {text}
    </p>
  );
};
