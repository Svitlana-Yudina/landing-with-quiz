import React, { useState } from 'react';
import './App.scss';
import { Main } from './modules/Main';
import { Quiz } from './modules/Quiz';
import { Registration } from './modules/Registration';
import { ButtonStyles } from './types/types';

export const App: React.FC = () => {
  const [page, setPage] = useState<ButtonStyles>('sex');

  return (
    <div className="app">
      <div className="app__content">
        {page === 'sex' && (
          <Main setPage={setPage}/>
        )}
        {page === 'quiz' && (
          <Quiz setPage={setPage}/>
        )}
        {page === 'create' && (
          <Registration />
        )}
      </div>
    </div>
  );
}
