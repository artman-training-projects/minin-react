import React, { Component } from 'react';
import styles from './quizCreator.module.css';

class QuizCreator extends Component {
  render(): JSX.Element {
    return (
      <div className={styles.quizCreator}>
        <h1>quiz creator</h1>
      </div>
    );
  }
}

export default QuizCreator;
