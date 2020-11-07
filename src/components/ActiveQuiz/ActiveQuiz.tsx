import React from 'react';
import styles from './activeQuiz.module.css';
import AnswersList from './AnswersList';
import { IAnswers, IQuestion, IonAnswerClick } from '../../types';

interface IActiveQuiz extends IAnswers {
  question: IQuestion;
  onAnswerClick: IonAnswerClick;
  answerNumber: number;
  quizLength: number;
}

const ActiveQuiz: React.FC<IActiveQuiz> = ({
  answers,
  question,
  onAnswerClick,
  answerNumber,
  quizLength,
}) => {
  return (
    <div className={styles.activeQuiz}>
      <p className={styles.question}>
        <span>
          <strong>{answerNumber}.</strong> {question}
        </span>

        <small>
          {answerNumber} из {quizLength}
        </small>
      </p>

      <AnswersList answers={answers} onAnswerClick={onAnswerClick} />
    </div>
  );
};

export default ActiveQuiz;
