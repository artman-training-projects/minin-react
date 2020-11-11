import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './quizList.module.css';

class QuizList extends Component {
  renderQuizes(): React.ReactFragment {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>test {quiz}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={styles.quizList}>
        <div>
          <h1>Список тестов</h1>

          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
