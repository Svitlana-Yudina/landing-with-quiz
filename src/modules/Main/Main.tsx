import React from 'react';
import { BackGroundPicture } from '../../components/BackGroundPicture';
import { CommentsList } from '../../components/CommentsList';
import { PrimaryButton } from '../../components/PrimaryButton';
import styles from './Main.module.scss';

export const Main: React.FC = () => {
  return (
    <>
      <div className={styles.main}>
        <BackGroundPicture />

        <div className={styles.content}>
          <h1 className={styles.title}>
            Наибольшая база анкет для знакомств
          </h1>
          <PrimaryButton
            type="sex"
            text="Я мужчина"
            image="./images/m_icon.svg"
          />
          <PrimaryButton
            type="sex"
            text="Я женщина"
            image="./images/f_icon.svg"
          />
        </div>
      </div>

      <CommentsList />
    </>
  );
};
