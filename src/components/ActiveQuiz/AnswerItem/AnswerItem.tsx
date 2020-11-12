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
}): JSX.Element => {
  const classes: Array<string> = [styles.answerItem];
  if (answerState) {
    classes.push(styles[answerState]);
  }

  return (
    <li className={classes.join(' ')} onClick={() => onAnswerClick(answer.id)}>
      {answer.test}
    </li>
  );
};

export default AnswerItem;
