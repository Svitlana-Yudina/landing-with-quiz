/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { getAge, getSequence } from '../../functions/function';
import { Inputs } from '../../types/types';
import { AgreeCheck } from '../AgreeCheck';
import { DateSelect } from '../DateSelect';
import { ErrMessage } from '../ErrMessage';
import { PrimaryButton } from '../PrimaryButton';
import { TextInput } from '../TextInput';
import styles from './RegistrationForm.module.scss';

const days = getSequence(1, 31);
const months = getSequence(1, 12).map(el => el.length === 1 ? '0' + el : el);
const years = getSequence(1940, 2010);

export const RegistrationForm: React.FC = () => {
  const [isAgeValid, setIsAgeValid] = useState(true);

  const methods = useForm<Inputs>({
    defaultValues: {
      name: '',
      day: '',
      month: '',
      year: '',
      password: '',
      email: '',
      agree: true,
    },
    mode: 'all',
    criteriaMode: 'all',
  });

  const { reset } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const userAge = getAge(+data.year, +data.month, +data.day);

    if (userAge < 18 || userAge > 80) {
      setIsAgeValid(false);

      return;
    }
    reset();
    alert('');
  };

  const namePattern = new RegExp(/^[A-Za-zа-яА-я]+$/);
  const emailPattern = new RegExp(/^[a-z0-9_'+*/^&=?~{}\-](\.?[a-z0-9_'+*/^&=?~{}\-])*\@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(\:\d{1,3})?)|(((([a-z0-9][a-z0-9\-]+[a-z0-9])|([a-z0-9]{1,2}))[\.]{1})+([a-z]{2,6})))$/);
  const passwordPattern = new RegExp(/[A-Za-zа-яА-я]/);

  const nameCheck = {
    pattern: namePattern,
    minLength: 2,
  };

  const emailCheck = {
    pattern: emailPattern,
    minLength: 6,
  };

  const passwordCheck = {
    pattern: passwordPattern,
    minLength: 8,
  };

  return (
    <FormProvider {...methods}>
      <form
        action="/"
        method="post"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className={styles.formItem}>
          <h3 className={styles.title}>
            Имя:
          </h3>
          <TextInput
            type="text"
            text="Введите имя"
            name="name"
            check={nameCheck}
          />
        </div>

        <div className={styles.formItem}>
          <h3 className={styles.title}>
            Дата рождения:
          </h3>
          <div className={styles.dateContainer}>
            <DateSelect
              name="day"
              options={days}
              defOption="ДД"
              setIsAgeValid={setIsAgeValid}
            />
            <DateSelect
              name="month"
              options={months}
              defOption="ММ"
              setIsAgeValid={setIsAgeValid}
            />
            <DateSelect
              name="year"
              options={years}
              defOption="ГГГГ"
              setIsAgeValid={setIsAgeValid}
            />
          </div>
          {!isAgeValid && (
            <ErrMessage text="Возраст должен быть больше 18 и меньше 80 лет"/>
          )}
        </div>

        <div className={styles.formItem}>
          <h3 className={styles.title}>
            Придумайте пароль:
          </h3>
          <TextInput
            type="password"
            text="Минимум 8 символов"
            name="password"
            check={passwordCheck}
          />
        </div>

        <div className={styles.formItem}>
          <h3 className={styles.title}>
            Email:
          </h3>
          <TextInput
            type="text"
            text="Введите свою почту"
            name="email"
            check={emailCheck}
          />
        </div>

        <PrimaryButton type="create" text="создать" onClick={() => {}}/>

        <AgreeCheck name="agree"/>
      </form>
    </FormProvider>
  );
};
