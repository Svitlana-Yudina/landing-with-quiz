import React from 'react';
import { BackGroundPicture } from '../../components/BackGroundPicture';
import { PrimaryButton } from '../../components/PrimaryButton';
import { QuizType } from '../../types/types';
import styles from './Quiz.module.scss';

type Props = {
  quiz: QuizType,
};

export const Quiz: React.FC<Props> = ({ quiz }) => {
  const { step, question, answers } = quiz;

  return (
    <>
      <div className={styles.quiz}>
        <BackGroundPicture />

        <div className={styles.content}>
          <h2 className={styles.question}>
            {question}
          </h2>
          <div className={styles.answers}>
            {answers.map(answer => (
              <PrimaryButton key={step} type="quiz" text={answer}/>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.text}>
        Чтобы идеально подобрать для вас пару,<br />
        ответьте на несколько вопросов
      </p>
    </>
  );
};
