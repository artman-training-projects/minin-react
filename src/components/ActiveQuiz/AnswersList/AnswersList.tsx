import React from 'react';
import styles from './answersList.module.css';
import AnswerItem from '../AnswerItem';
import { IAnswers, IonAnswerClick, IAnswerState } from '../../../types';

interface IAnswersList extends IAnswers {
  onAnswerClick: IonAnswerClick;
  answerState: IAnswerState | null;
}

const AnswersList: React.FC<IAnswersList> = ({
  answers,
  onAnswerClick,
  answerState,
}): JSX.Element => {
  return (
    <ul className={styles.answersList}>
      {answers.map((answer, index: number) => (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={onAnswerClick}
          answerState={answerState ? answerState[answer.id] : null}
        />
      ))}
    </ul>
  );
};

export default AnswersList;
