import React from 'react';
import './App.scss';
import { BackGroundPicture } from './components/BackGroundPicture';
// import { BackGroundPicture } from './components/BackGroundPicture';
// import { PrimaryButton } from './components/PrimaryButton';
import { Quiz } from './modules/Quiz';
import { QuizType } from './types/types';

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
];

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__content">
        {/* <BackGroundPicture /> */}
        <Quiz quiz={quiz[0]}/>
      {/* <BackGroundPicture />
        <div className="block">
          <PrimaryButton
            type="choice"
            text="Я мужчина"
            image="./images/m_icon.svg"
          />
          <PrimaryButton type="quiz" text="дружба и общение"/>
          <PrimaryButton type="create" text="Создать"/>
        </div> */}
        {/* <Quiz quiz={quiz[0]}/> */}
      </div>
    </div>
  );
}
