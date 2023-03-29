/* eslint-disable no-console */
/* eslint-disable no-shadow */
import classNames from 'classnames';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
// import { debounce } from '../../functions/function';
import { Check, InputType } from '../../types/types';
import styles from './TextInput.module.scss';

type Props = {
  type: InputType,
  text: string,
  name: string,
  check: Check,
};

export const TextInput: React.FC<Props> = ({ type, text, name, check }) => {
  const [isChanging, setIsChanging] = useState(false);
  const { register, formState: { errors, touchedFields } } = useFormContext();

  return (
    <label className={styles.label}>
      <input
        className={classNames(
          styles.input,
          { [styles.error]: !!errors[name] },
          { [styles.success]: !errors[name] && touchedFields[name] },
        )}
        type={type}
        placeholder={text}
        {...register(name, {
          required: {
            value: true,
            message: 'Это обязательное поле!',
          },
          minLength: {
            value: check.minLength,
            message: `Поле должно содержать не менее ${check.minLength} символов!`,
          },
          onChange() {
            setIsChanging(true);
          },
          onBlur() {
            setIsChanging(false);
          },
        })}
      />
      {touchedFields[name] && !isChanging && (
        <div className={classNames(
          styles.icon,
          { [styles.errorIcon]: !!errors[name] },
          { [styles.successIcon]: !errors[name] },
        )}></div>
      )}

      <ErrorMessage
          errors={ errors }
          name={name}
          render={({ messages }) => {
            return (
              (messages)
              && Object.entries(messages).map(([type, message]) => (
                <p key={type} className={styles.errorText}>
                  {message}
                </p>
              ))
            );
          }
          }
        />
    </label>
  );
};
