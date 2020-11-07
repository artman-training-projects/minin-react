import React from 'react';
import styles from './answerItem.module.css';
import {IAnswer} from '../../../types';

interface IAnswerItem {
  answer: IAnswer;
}

const AnswerItem: React.FC<IAnswerItem> = ({answer}) => {
  return (
    <li className={styles.answerItem}>
      {answer.text}
    </li>
  )
}

export default AnswerItem;
