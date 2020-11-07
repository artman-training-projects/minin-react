import React from 'react';
import styles from './answersList.module.css';
import AnswerItem from '../AnswerItem';
import {IAnswers, IonAnswerClick} from '../../../types';

interface IAnswersList extends IAnswers {
  onAnswerClick: IonAnswerClick;
}

const AnswersList: React.FC<IAnswersList> = ({answers, onAnswerClick}) => {
  return (
    <ul className={styles.answersList}>
      {answers.map((answer, index: number) => (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={onAnswerClick}
        />
      ))}
    </ul>
  )
}

export default AnswersList;
