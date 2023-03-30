/* eslint-disable no-shadow */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styles from './DateSelect.module.scss';
import classNames from 'classnames';
import { ErrMessage } from '../ErrMessage';

type Props = {
  name: string,
  options: string[],
  defOption: string,
  setIsAgeValid: React.Dispatch<React.SetStateAction<boolean>>,
};

export const DateSelect: React.FC<Props> = ({
  name,
  options,
  defOption,
  setIsAgeValid,
}) => {
  const { register, formState: { errors, touchedFields } } = useFormContext();

  return (
    <div className={styles.container}>
      <select
        className={classNames(
          styles.date,
          { [styles.error]: !!errors[name] },
          { [styles.success]: !errors[name] && touchedFields[name] },
        )}
        {...register(name, {
          required: {
            value: true,
            message: 'Это обязательное поле!',
          },
          onChange() {
            setIsAgeValid(true);
          },
        })}
      >
        {name === 'month' && (
          <>
            <option value="">{defOption}</option>
              {options.map(option => (
                <option key={option} value={parseInt(option) - 1}>
                  {option}
                </option>
              ))}
          </>
        )}

        {name !== 'month' && (
          <>
            <option value="">{defOption}</option>
              {options.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </>
        )}
      </select>
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
    </div>
  );
};
