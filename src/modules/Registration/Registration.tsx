import React from 'react';
import { BackGroundPicture } from '../../components/BackGroundPicture';
import { Footer } from '../../components/Footer';
import { RegistrationForm } from '../../components/RegistrationForm';
import styles from './Registration.module.scss';

export const Registration: React.FC = () => {
  return (
    <div className={styles.registration}>
      <BackGroundPicture type="create" />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Создать анкету
        </h1>
        <p className={styles.helperText}>
          Быстрая регистрация, чтоби перейти к <br /> общению
        </p>
        <div className={styles.form}>
          <RegistrationForm />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
