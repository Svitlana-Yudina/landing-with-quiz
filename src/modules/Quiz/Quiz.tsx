import React from 'react';
import { BackGroundPicture } from '../../components/BackGroundPicture';
import { PrimaryButton } from '../../components/PrimaryButton';
import { QuizType } from '../../types/types';
import styles from './Quiz.module.scss';

type Props = {
  question: QuizType,
  setStep: React.Dispatch<React.SetStateAction<number>>,
}

export const Quiz: React.FC<Props> = ({ question, setStep }) => {
  const handleClickQuiz = () => {
    setStep(currStep => currStep + 1);
  };

  return (
    <>
      <div className={styles.quiz}>
        <BackGroundPicture />
        {question && (
          <div className={styles.content}>
            <h2 className={styles.question}>
              {question.question}
            </h2>
            <div className={styles.answers}>
              {question.answers.map(answer => (
                <PrimaryButton
                  key={`${question.step}-${answer}`}
                  type="quiz"
                  text={answer}
                  onClick={handleClickQuiz}
                />
              ))}
            </div>
          </div>
        )}

      </div>
      <p className={styles.text}>
        Чтобы идеально подобрать для вас пару,<br />
        ответьте на несколько вопросов
      </p>
    </>
  );
};
