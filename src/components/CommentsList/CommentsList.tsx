/* eslint-disable max-len */
import React from 'react';
import { CommentType } from '../../types/types';
import { CommentItem } from '../CommentItem';
import styles from './CommentsList.module.scss';

const comments: CommentType[] = [
  {
    id: 1,
    femName: 'Аня',
    maleName: 'Дима',
    photo: './images/people_1.svg',
    ago: '23 недели назад',
    commentText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sequi recusandae, repellendus eaque incidunt, molestiae fugit nesciunt, autem amet quisquam soluta corporis! Ut qui ad, nesciunt excepturi beatae quia iste Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sequi recusandae, repellendus eaque incidunt, molestiae fugit nesciunt, autem amet quisquam soluta corporis! Ut qui ad, nesciunt excepturi beatae quia iste',
  },
  {
    id: 2,
    femName: 'Таня',
    maleName: 'Петя',
    photo: './images/people_2.svg',
    ago: '18 недель назад',
    commentText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sequi recusandae, repellendus eaque incidunt',
  },
  {
    id: 3,
    femName: 'Катя',
    maleName: 'Миша',
    photo: './images/people_3.svg',
    ago: '3 недели назад',
    commentText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sequi recusandae, repellendus eaque incidunt, molestiae fugit nesciunt, autem amet quisquam soluta corporis! Ut qui ad, nesciunt excepturi beatae quia iste Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sequi recusandae, repellendus eaque incidunt, molestiae fugit nesciunt, autem amet quisquam soluta corporis! Ut qui ad, nesciunt excepturi beatae quia iste Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sequi recusandae, repellendus eaque incidunt, molestiae fugit nesciunt, autem amet quisquam soluta corporis! Ut qui ad, nesciunt excepturi beatae quia iste',
  },
];

export const CommentsList: React.FC = () => {
  return (
    <div className={styles.list}>
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment}/>
      ))}
    </div>
  );
};
