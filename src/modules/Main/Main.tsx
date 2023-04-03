/* eslint-disable no-shadow */
import React from 'react';
import { BackGroundPicture } from '../../components/BackGroundPicture';
import { CommentsList } from '../../components/CommentsList';
import { Footer } from '../../components/Footer';
import { PrimaryButton } from '../../components/PrimaryButton';
import { ButtonStyles } from '../../types/types';
import styles from './Main.module.scss';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<ButtonStyles>>,
}

export const Main: React.FC<Props> = ({ setPage }) => {
  const handleClickSex = () => {
    setPage('quiz');
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.bgWrapper}>
          <BackGroundPicture type="sex" />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            Наибольшая база анкет для знакомств
          </h1>
          <div className={styles.buttons}>
            <PrimaryButton
              type="sex"
              text="Я мужчина"
              image="./images/m_icon.svg"
              onClick={handleClickSex}
            />
            <PrimaryButton
              type="sex"
              text="Я женщина"
              image="./images/f_icon.svg"
              onClick={handleClickSex}
            />
          </div>
        </div>
      </div>

      <CommentsList />

      <Footer />

    </>
  );
};
