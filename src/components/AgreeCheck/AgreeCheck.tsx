/* eslint-disable no-shadow */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styles from './AgreeCheck.module.scss';
import { ErrMessage } from '../ErrMessage';

type Props = {
  name:string,
};

export const AgreeCheck: React.FC<Props> = ({ name }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <div className={styles.checkContent}>
        <input
          className={styles.agreeCheckbox}
          type="checkbox"
          {...register(name, {
            required: {
              value: true,
              message: 'Это обязательное поле!',
            },
          })}
          id="agree"
        />
        <label className={styles.agreeLabel} htmlFor="agree">
          <p className={styles.agreeDescription}>
            Регистрируясь, я подтверждаю что мне исполнилось 18 лет.
            Я принимаю условия
            <a
              className={styles.agreeDescription}
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              лицензионного соглашения,
            </a>
            <a
              className={styles.agreeDescription}
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              политики конфиденциальности,
            </a>
            <a
              className={styles.agreeDescription}
              href="/"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              обработки персональных данных.
            </a>
          </p>
        </label>
      </div>
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
    </>
  );
};
