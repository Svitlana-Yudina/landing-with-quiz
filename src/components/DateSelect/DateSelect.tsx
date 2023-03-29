/* eslint-disable no-shadow */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './DateSelect.module.scss';

type Props = {
  name: string,
  options: string[],
  defOption: string,
};

export const DateSelect: React.FC<Props> = ({ name, options, defOption }) => {
  const { register } = useFormContext();

  return (
    <>
      <select
        className={styles.date}
        {...register(name, {
          required: {
            value: true,
            message: 'Это обязательное поле!',
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
    </>
  );
};
