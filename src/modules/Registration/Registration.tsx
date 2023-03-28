import React from 'react';
import { RegistrationForm } from '../../components/RegistrationForm';
import styles from './Registration.module.scss';

export const Registration: React.FC = () => {
  return (
    <div className={styles.registration}>
      <RegistrationForm />
    </div>
  );
};
