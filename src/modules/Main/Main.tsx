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
        <BackGroundPicture />

        <div className={styles.content}>
          <h1 className={styles.title}>
            Наибольшая база анкет для знакомств
          </h1>
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

      <div className={styles.comments}>
        <CommentsList />
      </div>

      {/* <footer className={styles.footer}>
        <a
          href="/"
          className={styles.link}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Поддержка
        </a>
        <a
          href="/"
          className={styles.link}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          О нас
        </a>
        <a
          href="/"
          className={styles.link}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Контакты
        </a>
      </footer> */}
      <Footer />

    </>
  );
};
