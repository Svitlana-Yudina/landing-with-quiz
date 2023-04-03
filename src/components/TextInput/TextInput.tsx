/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import classNames from 'classnames';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Check, InputType } from '../../types/types';
import styles from './TextInput.module.scss';
import { ErrMessage } from '../ErrMessage';
import { debounce } from '../../functions/function';

type Props = {
  type: InputType,
  text: string,
  name: string,
  check: Check,
};

export const TextInput: React.FC<Props> = ({ type, text, name, check }) => {
  const [passType, setPassType] = useState(type);
  const [isChanging, setIsChanging] = useState(false);
  const [changeError, setChangeError] = useState('');
  const {
    register,
    trigger,
    getValues,
    setValue,
    formState: { errors, touchedFields },
  } = useFormContext();
  const isSuccessIcon = !errors[name] && !changeError && touchedFields[name];

  return (
    <>
    <label
      className={styles.label}
    >
      <input
        className={classNames(
          styles.input,
          { [styles.error]: !!errors[name] || changeError },
          { [styles.success]: !errors[name]
            && touchedFields[name]
            && !changeError },
        )}
        type={passType}
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
          validate: {
            pattern: (val) => {
              const res = check.pattern.test(val);

              if (name === 'name') {
                if (!res) {
                  setChangeError('Пожалуйста, используйте только буквы');
                } else {
                  setChangeError('');
                }
              }

              if (name === 'email') {
                if (!res) {
                  setChangeError('Пожалуйста, используйте правильный email');
                } else {
                  setChangeError('');
                }
              }

              return res;
            },
          },
          // onChange(event) {
          //   setIsChanging(true);
          //   console.log('onchange', isChanging);
          // },
          onBlur() {
            setIsChanging(false);
          },
        })}
        onFocus={() => {
          setIsChanging(true);
        }}
        onChange={debounce(async(event: React.ChangeEvent<HTMLInputElement>) => {
          await setValue(name, event.target.value, { shouldValidate: true });
          await trigger(name);
        }, 700)}
      />
      {!isChanging && (
        <div className={classNames(
          styles.icon,
          { [styles.errorIcon]: !!errors[name] || changeError },
          { [styles.successIcon]: isSuccessIcon },
        )}></div>
      )}

      {name === 'password' && (
        <div
        id="eye"
        className={classNames(
          styles.passwordIcon,
          { [styles.hidden]: !isChanging && touchedFields[name] },
          { [styles.closedEye]: passType === 'password' },
          { [styles.openedEye]: passType === 'text' },
        )}
          onClick={() => {
            setPassType(currPasType => {
              if (currPasType === 'password') {
                return 'text';
              }

              return 'password';
            });
          }}
        ></div>
      )}
    </label>

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
    </>
  );
};
