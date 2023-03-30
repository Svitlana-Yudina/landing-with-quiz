import React from 'react';
import { ValidateResult } from 'react-hook-form';
import styles from './ErrMessage.module.scss';

type Props = {
  text: ValidateResult,
};

export const ErrMessage: React.FC<Props> = ({ text }) => {
  return (
    <p className={styles.errorText}>
      {text}
    </p>
  );
};
