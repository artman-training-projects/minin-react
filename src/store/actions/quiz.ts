import axios from '../../axios/axios-quiz';
import {
  FETCH_QUIZ_ERROR,
  FETCH_QUIZ_START,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZIS_SUCCESS,
  FINISH_QUIZ,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
  QUIZ_SET_STATE,
} from './actionsTypes';
import { IQuiz, IResults } from '../../types';

export default function fetchQuiz() {
  return async (dispatch: any) => {
    dispatch(fetchQuizStart());

    try {
      const response = await axios.get('/quizes.json');

      const quiz: any = [];
      Object.keys(response.data).forEach((key, index) => {
        quiz.push({
          id: key,
          name: `Тест №${index + 1}`,
        });
      });

      dispatch(fetchQuizSuccess(quiz));
    } catch (err) {
      dispatch(fetchQuizError(err));
    }
  };
}

export function fetchQuizById(quizId: any) {
  return async (dispatch: any) => {
    dispatch(fetchQuizStart());

    try {
      const response = await axios.get(`/quizes/${quizId}.json`);

      const quiz = response.data;

      dispatch(fetchQuizisSuccess(quiz));
    } catch (err) {
      dispatch(fetchQuizError(err));
    }
  };
}

export function fetchQuizisSuccess(quizis: any) {
  return {
    type: FETCH_QUIZIS_SUCCESS,
    quizis,
  };
}

export function quizAnswerClick(answerId: any) {
  return (dispatch: any, getState: any) => {
    const state = getState().quiz;

    if (state.answerState) {
      const key = Object.keys(state.answerState)[0];
      if (state.answerState[key] === 'success') {
        return;
      }
    }

    const question: IQuiz = state.quizis[state.activeQuestion];
    const results: IResults = state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      dispatch(
        quizSetState(
          {
            [answerId]: 'success',
          },
          results
        )
      );

      const timeout: number = window.setTimeout(() => {
        if (isQuizFinished(state)) {
          dispatch(finishQuiz());
        } else {
          dispatch(quizNextQuestion(state.activeQuestion + 1));
        }

        window.clearTimeout(timeout);
      }, 500);
    } else {
      results[question.id] = 'error';
      dispatch(
        quizSetState(
          {
            [answerId]: 'error',
          },
          results
        )
      );
    }
  };
}

export function quizSetState(answerState: any, results: any) {
  return {
    type: QUIZ_SET_STATE,
    answerState,
    results,
  };
}

export function isQuizFinished(state: any) {
  return state.activeQuestion + 1 === state.quizis.length;
}

export function finishQuiz() {
  return {
    type: FINISH_QUIZ,
  };
}

export function retryQuiz() {
  return {
    type: QUIZ_RETRY,
  };
}

export function quizNextQuestion(number: any) {
  return {
    type: QUIZ_NEXT_QUESTION,
    number,
  };
}

export function fetchQuizStart() {
  return {
    type: FETCH_QUIZ_START,
  };
}

export function fetchQuizSuccess(quiz: any) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz,
  };
}

export function fetchQuizError(err: any) {
  return {
    type: FETCH_QUIZ_ERROR,
    err,
  };
}
