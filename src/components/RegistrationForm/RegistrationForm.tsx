/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { getSequence } from '../../functions/function';
import { Inputs } from '../../types/types';
import { DateSelect } from '../DateSelect';
import { PrimaryButton } from '../PrimaryButton';
import { TextInput } from '../TextInput';
import styles from './RegistrationForm.module.scss';

const days = getSequence(1, 31);
const months = getSequence(1, 12).map(el => el.length === 1 ? '0' + el : el);
const years = getSequence(1940, 2010);

export const RegistrationForm: React.FC = () => {
  const methods = useForm<Inputs>({
    defaultValues: {
      name: '',
      day: '',
      month: '',
      year: '',
      password: '',
      email: '',
    },
    mode: 'all',
    criteriaMode: 'all',
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const date = new Date(+data.year, +data.month, +data.day);

    console.log(data);
    console.log(date);
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
            <DateSelect name="day" options={days} defOption="ДД"/>
            <DateSelect name="month" options={months} defOption="ММ"/>
            <DateSelect name="year" options={years} defOption="ГГГГ"/>
          </div>
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
      </form>
    </FormProvider>
  );
};
