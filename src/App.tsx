/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { Main } from './modules/Main';
import { Quiz } from './modules/Quiz';
import { Registration } from './modules/Registration';
import { ButtonStyles, QuizType } from './types/types';

const quiz: QuizType[] = [
  {
    step: 1,
    question: 'Цель знакомства:',
    answers: [
      'дружба и общение',
      '',
      'создание семьи',
      'встречи без обязательств',
    ],
  },
  {
    step: 2,
    question: 'Что предпочтете?',
    answers: [
      'мясо',
      'птица',
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

export const App: React.FC = () => {
  const [page, setPage] = useState<ButtonStyles>('sex');
  const [step, setStep] = useState(1);
  const foundStep = quiz.find(item => item.step === step);

  if (!foundStep) {
    setPage('create');
    setStep(1);
  }

  return (
    <div className="app">
      <div className="app__content">
        {page === 'sex' && (
          <Main setPage={setPage}/>
        )}
        {page === 'quiz' && foundStep && (
          <Quiz question={foundStep} setStep={setStep}/>
        )}
        {page === 'create' && (
          <Registration />
        )}
        {/* <Main setPage={setPage} /> */}
        {/* <Registration /> */}
        {/* <Quiz question={{
          step: 1,
          question: 'Цель знакомства:',
          answers: [
            'дружба и общение',
            '',
            'создание семьи',
            'встречи без обязательств',
          ],
        }} setStep={setStep}/> */}
      </div>
    </div>
  );
}
