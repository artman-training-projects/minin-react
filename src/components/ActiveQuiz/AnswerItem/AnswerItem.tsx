import React from 'react';
import styles from './answerItem.module.css';
import { IAnswer, IonAnswerClick } from '../../../types';

interface IAnswerItem {
  answer: IAnswer;
  onAnswerClick: IonAnswerClick;
  answerState: string | null;
}

const AnswerItem: React.FC<IAnswerItem> = ({
  answer,
  onAnswerClick,
  answerState,
}) => {
  const classes = [styles.answerItem];
  if (answerState) {
    classes.push(styles[answerState]);
  }

  return (
    <li className={classes.join(' ')} onClick={() => onAnswerClick(answer.id)}>
      {answer.text}
    </li>
  );
};

export default AnswerItem;
