import React from 'react';
import styles from './activeQuiz.module.css';
import AnswersList from './AnswersList';
import { IAnswers, IQuestion, IonAnswerClick, IAnswerState } from '../../types';

interface IActiveQuiz extends IAnswers {
  question: IQuestion;
  onAnswerClick: IonAnswerClick;
  answerNumber: number;
  quizLength: number;
  answerState: IAnswerState | null;
}

const ActiveQuiz: React.FC<IActiveQuiz> = ({
  answers,
  question,
  onAnswerClick,
  answerNumber,
  quizLength,
  answerState,
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

      <AnswersList
        answers={answers}
        onAnswerClick={onAnswerClick}
        answerState={answerState}
      />
    </div>
  );
};

export default ActiveQuiz;
