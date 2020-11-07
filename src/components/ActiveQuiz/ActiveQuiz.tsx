import React from 'react';
import styles from './activeQuiz.module.css';
import AnswersList from './AnswersList';
import {IAnswers, IQuestion, IonAnswerClick} from '../../types';

interface IActiveQuiz extends IAnswers {
  question: IQuestion;
  onAnswerClick: IonAnswerClick;
}

const ActiveQuiz: React.FC<IActiveQuiz> = ({answers, question, onAnswerClick}) => {
  return (
    <div className={styles.activeQuiz}>
      <p className={styles.question}>
        <span>
          <strong>1.</strong> {question}
        </span>

        <small>4 из 12</small>
      </p>

      <AnswersList
        answers={answers}
        onAnswerClick={onAnswerClick}
      />
    </div>
  )
}

export default ActiveQuiz;
