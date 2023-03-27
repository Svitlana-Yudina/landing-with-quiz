import React from 'react';
import './App.scss';
import { Main } from './modules/Main';
import { Quiz } from './modules/Quiz';
import { QuizType } from './types/types';

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
];

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Main />
        {/* <Quiz quiz={quiz[0]}/> */}
      </div>
    </div>
  );
}
