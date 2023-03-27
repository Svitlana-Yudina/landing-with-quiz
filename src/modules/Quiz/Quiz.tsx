import React from 'react';
import { BackGroundPicture } from '../../components/BackGroundPicture';
import { PrimaryButton } from '../../components/PrimaryButton';
import { ToolTipText } from '../../components/ToolTipText';
import { QuizType } from '../../types/types';
import styles from './Quiz.module.scss';

type Props = {
  quiz: QuizType,
};

export const Quiz: React.FC<Props> = ({ quiz }) => {
  const { step, question, answers } = quiz;

  return (
    <div className={styles.quiz}>
      {/* <div className={styles.x}> */}
        <BackGroundPicture />
      {/* </div> */}

      <div className={styles.content}>
        <div className={styles.quizBlock}>
          <h2 className={styles.question}>
            {question}
          </h2>
          <div className={styles.answers}>
            {answers.map(answer => (
              <PrimaryButton key={step} type="quiz" text={answer}/>
            ))}
          </div>
        </div>

        <ToolTipText
          text='Чтобы идеально подобрать для вас пару,
          ответьте на несколько вопросов'
        />
      </div>
    </div>
  );
};
