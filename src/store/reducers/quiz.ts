import { IAction, IState } from '../../types/interfaces';
import {
  FETCH_QUIZ_ERROR,
  FETCH_QUIZ_START,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZIS_SUCCESS,
  FINISH_QUIZ,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
  QUIZ_SET_STATE,
} from '../actions/actionsTypes';

const initialState: IState = {
  quiz: [],
  loading: false,
  error: null,
  results: {},
  isFinished: false,
  activeQuestion: 0,
  answerState: null,
  quizis: null,
};

export default function quizReducer(
  state: IState = initialState,
  action: IAction
) {
  switch (action.type) {
    case FETCH_QUIZ_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
        quiz: action.quiz,
      };
    case FETCH_QUIZ_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_QUIZIS_SUCCESS: {
      return {
        ...state,
        loading: false,
        quizis: action.quizis,
      };
    }
    case QUIZ_SET_STATE:
      return {
        ...state,
        answerState: action.answerState,
        results: action.results,
      };
    case FINISH_QUIZ:
      return {
        ...state,
        isFinished: true,
      };
    case QUIZ_NEXT_QUESTION:
      return {
        ...state,
        answerState: null,
        activeQuestion: action.number,
      };
    case QUIZ_RETRY:
      return {
        ...state,
        activeQuestion: 0,
        answerState: null,
        isFinished: false,
        results: {},
      };
    default:
      return state;
  }
}
