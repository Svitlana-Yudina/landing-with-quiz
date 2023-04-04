import React, { useState } from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
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
        <TransitionGroup className="test">
          {page === 'sex' && (
            <CSSTransition
            key="sex"
            timeout={300}
            classNames="item"
          >
            <Main setPage={setPage}/>
          </CSSTransition>
          )}
          {page === 'quiz' && foundStep && (
          <CSSTransition
            key={`${quiz}-${foundStep.step}`}
            timeout={300}
            classNames="item"
          >
              <Quiz question={foundStep} setStep={setStep}/>
          </CSSTransition>
          )}
          {page === 'create' && (
            <CSSTransition
              key="create"
              timeout={300}
              classNames="item"
            >
            <Registration />
          </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </div>
  );
}
