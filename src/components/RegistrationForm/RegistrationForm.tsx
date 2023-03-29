/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { Inputs } from '../../types/types';
import { PrimaryButton } from '../PrimaryButton';
import { TextInput } from '../TextInput';
import styles from './RegistrationForm.module.scss';

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
    console.log(data);
  };

  const namePattern = new RegExp(/[A-Za-zа-яА-я]{2,60}/);
  const emailPattern = new RegExp(/^[a-z0-9_'+*/^&=?~{}\-](\.?[a-z0-9_'+*/^&=?~{}\-])*\@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(\:\d{1,3})?)|(((([a-z0-9][a-z0-9\-]+[a-z0-9])|([a-z0-9]{1,2}))[\.]{1})+([a-z]{2,6})))$/);
  const passwordPattern = new RegExp(/[A-Za-zа-яА-я]{8}/);

  const nameCheck = {
    pattern: namePattern,
    minLength: 2,
  };

  const emailCheck = {
    pattern: emailPattern,
    minLength: 14,
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
        <TextInput
          type="text"
          text="Введите имя"
          name="name"
          check={nameCheck}
        />

        <div>
          <select name="day"></select>
          <select name="month"></select>
          <select name="year"></select>
        </div>

        <TextInput
          type="password"
          text="Минимум 8 символов"
          name="password"
          check={passwordCheck}
        />

        <TextInput
          type="text"
          text="Введите email"
          name="email"
          check={emailCheck}
        />

        <PrimaryButton type="create" text="создать" onClick={() => {}}/>
      </form>
    </FormProvider>
  );
};
