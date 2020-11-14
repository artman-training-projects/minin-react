import {
  IResults,
  IAction,
  IQuestionItem,
  IState,
} from '../../types/interfaces';
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

export function fetchQuiz(): Function {
  return async (dispatch: Function) => {
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

export function fetchQuizById(quizId: string): Function {
  return async (dispatch: Function) => {
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

export function fetchQuizisSuccess(quizis: Array<IQuestionItem>): IState {
  return {
    type: FETCH_QUIZIS_SUCCESS,
    quizis,
  };
}

export function quizAnswerClick(answerId: number): Function {
  return (dispatch: Function, getState: Function) => {
    const state = getState().quiz;

    if (state.answerState) {
      const key = Object.keys(state.answerState)[0];
      if (state.answerState[key] === 'success') {
        return;
      }
    }

    const question: IQuestionItem = state.quizis[state.activeQuestion];
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

export function quizSetState(answerState: any, results: any): IAction {
  return {
    type: QUIZ_SET_STATE,
    answerState,
    results,
  };
}

export function isQuizFinished(state: IState): Boolean {
  return state.activeQuestion + 1 === state.quizis.length;
}

export function finishQuiz(): IAction {
  return {
    type: FINISH_QUIZ,
  };
}

export function retryQuiz(): IAction {
  return {
    type: QUIZ_RETRY,
  };
}

export function quizNextQuestion(number: any): IAction {
  return {
    type: QUIZ_NEXT_QUESTION,
    number,
  };
}

export function fetchQuizStart(): IAction {
  return {
    type: FETCH_QUIZ_START,
  };
}

export function fetchQuizSuccess(quiz: any): IAction {
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz,
  };
}

export function fetchQuizError(err: any): IAction {
  return {
    type: FETCH_QUIZ_ERROR,
    err,
  };
}
