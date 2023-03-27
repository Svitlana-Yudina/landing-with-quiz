import React from 'react';
import './App.scss';
import { BackGroundPicture } from './components/BackGroundPicture';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__content">
        <BackGroundPicture />
        hello
      </div>
    </div>
  );
}
