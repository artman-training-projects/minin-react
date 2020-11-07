import React from 'react';
import styles from './answersList.module.css';
import AnswerItem from '../AnswerItem';
import {IAnswers} from '../../../types';

const AnswersList: React.FC<IAnswers> = ({answers}) => {
  return (
    <ul className={styles.answersList}>
      {answers.map((answer, index: number) => (
        <AnswerItem
          key={index}
          answer={answer}
        />
      ))}
    </ul>
  )
}

export default AnswersList;
