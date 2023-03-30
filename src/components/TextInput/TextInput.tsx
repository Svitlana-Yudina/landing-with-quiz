/* eslint-disable no-shadow */
import classNames from 'classnames';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Check, InputType } from '../../types/types';
import styles from './TextInput.module.scss';
import { ErrMessage } from '../ErrMessage';

type Props = {
  type: InputType,
  text: string,
  name: string,
  check: Check,
};

export const TextInput: React.FC<Props> = ({ type, text, name, check }) => {
  const [isChanging, setIsChanging] = useState(false);
  const [changeError, setChangeError] = useState('');
  const { register, formState: { errors, touchedFields } } = useFormContext();
  const isSuccessIcon = !errors[name] && !changeError && touchedFields[name];

  const handleChange = (value: string) => {
    if (name === 'name') {
      if (!check.pattern.test(value)) {
        setChangeError('Пожалуйста, используйте только буквы');
      } else {
        setChangeError('');
      }
    }

    if (name === 'email') {
      if (!check.pattern.test(value)) {
        setChangeError('Пожалуйста, используйте правильный email');
      } else {
        setChangeError('');
      }
    }
  }

  return (
    <label className={styles.label}>
      <input
        className={classNames(
          styles.input,
          { [styles.error]: !!errors[name] || changeError },
          { [styles.success]: !errors[name]
            && touchedFields[name]
            && !changeError },
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
          onChange(event) {
            setIsChanging(true);
            handleChange(event.target.value);
          },
          onBlur() {
            setIsChanging(false);
          },
        })}
      />
      {!isChanging && (
        <div className={classNames(
          styles.icon,
          { [styles.errorIcon]: !!errors[name] || changeError },
          { [styles.successIcon]: isSuccessIcon },
        )}></div>
      )}

      <ErrorMessage
          errors={ errors }
          name={name}
          render={({ messages }) => {
            return (
              (messages)
              && Object.entries(messages).map(([type, message]) => (
                <ErrMessage key={type} text={message}/>
              ))
            );
          }
          }
        />
        {changeError && (
          <ErrMessage text={changeError}/>
        )}
    </label>
  );
};
