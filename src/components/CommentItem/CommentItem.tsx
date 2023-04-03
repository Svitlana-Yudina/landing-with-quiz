/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { CommentType } from '../../types/types';
import styles from './CommentItem.module.scss';

type Props = {
  comment: CommentType,
};

export const CommentItem: React.FC<Props> = ({ comment }) => {
  const [isFullShown, setIsFullShown] = useState(false);
  const {
    femName,
    maleName,
    photo,
    ago,
    shortText,
    fullText,
  } = comment;

  return (
    <div className={styles.comment}>
      <div className={styles.title}>
        <img className={styles.photo} src={photo} alt="people"/>
        <div>
          <p className={styles.names}>
            {`${femName} и ${maleName}`}
          </p>
          <p className={styles.when}>
            {ago}
          </p>
        </div>
      </div>
      {!isFullShown && (
        <p className={styles.description}>
          {shortText}
          {fullText.length > shortText.length && (
            <a
              href='/'
              className={styles.readMore}
              onClick={(event) => {
                event.preventDefault();
                setIsFullShown(true);
              }}
            >
              Читать полностью
            </a>
          )}
        </p>
      )}

      {isFullShown && (
        <p className={styles.description}>
          {fullText}
        </p>
      )}
    </div>
  );
};
