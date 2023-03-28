import classNames from 'classnames';
import React from 'react';
import { InputType } from '../../types/types';
import styles from './TextInput.module.scss';

type Props = {
  type: InputType,
  text: string,
};

export const TextInput: React.FC<Props> = ({ type, text }) => {
  return (
    <label className={styles.label}>
      <input
        className={classNames(
          styles.input,
          styles.success,
        )}
        type={type}
        placeholder={text}
      />
      <div className={classNames(
        styles.icon,
        styles.successIcon,
      )}></div>
    </label>
  );
};
