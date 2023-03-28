/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { TextInput } from '../TextInput';
import styles from './RegistrationForm.module.scss';

export const RegistrationForm: React.FC = () => {
  return (
    <form action="/">
      <TextInput type="text" text="Введите имя" />

      <div>
        <select name="day"></select>
        <select name="month"></select>
        <select name="year"></select>
      </div>

      <TextInput type="password" text="Минимум 8 символов" />

      <TextInput type="text" text="Введите email" />

      <PrimaryButton type="create" text="создать" onClick={() => {}}/>
    </form>
  );
};
