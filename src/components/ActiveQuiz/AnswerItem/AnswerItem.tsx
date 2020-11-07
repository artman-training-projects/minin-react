import React from 'react';
import styles from './answerItem.module.css';
import { IAnswer, IonAnswerClick } from '../../../types';

interface IAnswerItem {
  answer: IAnswer;
  onAnswerClick: IonAnswerClick;
}

const AnswerItem: React.FC<IAnswerItem> = ({ answer, onAnswerClick }) => {
  return (
    <li className={styles.answerItem} onClick={() => onAnswerClick(answer.id)}>
      {answer.text}
    </li>
  );
};

export default AnswerItem;
