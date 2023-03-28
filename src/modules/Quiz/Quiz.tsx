/* eslint-disable no-console */
import React, { useState } from 'react';
import { BackGroundPicture } from '../../components/BackGroundPicture';
import { PrimaryButton } from '../../components/PrimaryButton';
import { ButtonStyles, QuizType } from '../../types/types';
import styles from './Quiz.module.scss';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<ButtonStyles>>,
}

const quiz: QuizType[] = [
  {
    step: 1,
    question: 'Цель знакомства:',
    answers: [
      'дружба и общение',
      'test string'
      'создание семьи',
      'встречи без обязательств',
    ],
  },
  {
    step: 2,
    question: 'Что предпочтете?',
    answers: [
      'мясо',
      'рыба',
      'только овощи',
    ],
  },
  {
    step: 3,
    question: 'Любимый фрукт:',
    answers: [
      'банан',
      'яблоко',
      'апельсин',
      'виноград',
    ],
  },
  {
    step: 4,
    question: 'Любимый напиток:',
    answers: [
      'кофе',
      'чай',
      'вода',
      'алкоголь',
    ],
  },
];

export const Quiz: React.FC<Props> = ({ setPage }) => {
  const [step, setStep] = useState(1);
  const foundStep = quiz.find(item => item.step === step);

  console.log(foundStep);

  if (!foundStep) {
    setPage('create');
  }

  const handleClickQuiz = () => {
    setStep(currStep => currStep + 1);
  };

  return (
    <>
      <div className={styles.quiz}>
        <BackGroundPicture />
        {foundStep && (
          <div className={styles.content}>
            <h2 className={styles.question}>
              {foundStep.question}
            </h2>
            <div className={styles.answers}>
              {foundStep.answers.map(answer => (
                <PrimaryButton
                  key={`${foundStep.step}-${answer}`}
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
