import React from 'react';
import styles from './activeQuiz.module.css';
import AnswersList from './AnswersList';
import {IAnswers} from '../../types';

const ActiveQuiz: React.FC<IAnswers> = ({answers}) => {
  return (
    <div className={styles.activeQuiz}>
      <p className={styles.question}>
        <span>
          <strong>1.</strong> Как дела?
        </span>

        <small>4 из 12</small>
      </p>

      <AnswersList
        answers={answers}
      />
    </div>
  )
}

export default ActiveQuiz;
