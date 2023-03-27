import React from 'react';
import './App.scss';
import { BackGroundPicture } from './components/BackGroundPicture';
import { PrimaryButton } from './components/PrimaryButton';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__content">
      <BackGroundPicture />
        <div className="block">
          <PrimaryButton
            type="choice"
            text="Я мужчина"
            image="./images/m_icon.svg"
          />
          <PrimaryButton type="quiz" text="дружба и общение"/>
          <PrimaryButton type="create" text="Создать"/>
        </div>
      </div>
    </div>
  );
}
