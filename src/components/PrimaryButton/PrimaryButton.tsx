import classNames from 'classnames';
import React from 'react';
import { ButtonStyles } from '../../types/types';
import styles from './PrimaryButton.module.scss';

type Props = {
  type: ButtonStyles,
  text: string,
  image?: string,
  onClick: () => void,
};

const BUTTON_STYLES = {
  sex: styles.sexChoice,
  quiz: styles.quizAnswers,
  create: styles.createUser,
}

export const PrimaryButton: React.FC<Props> = ({
  type,
  text,
  image,
  onClick,
}) => {
  return (
    <button
      type="submit"
      className={classNames(
        styles.default,
        BUTTON_STYLES[type],
        { [styles.withIcon]: !!image },
      )}
      onClick={onClick}
    >
      {image && (
        <img className={styles.icon} src={image} alt="person" />
      )}
      <span>{text}</span>
    </button>
  );
}
