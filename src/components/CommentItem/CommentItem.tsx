import React from 'react';
import { CommentType } from '../../types/types';
import styles from './CommentItem.module.scss';

type Props = {
  comment: CommentType,
};

export const CommentItem: React.FC<Props> = ({ comment }) => {
  const {
    femName,
    maleName,
    photo,
    ago,
    commentText,
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

      <div className={styles.description}>
        {commentText}
      </div>
      {/* <span>Читать полностью</span> */}
    </div>
  );
};
