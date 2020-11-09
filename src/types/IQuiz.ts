import { IAnswers } from './index';

export default interface IQuiz {
  answers: IAnswers;
  id: number;
  question: string;
  rightAnswerId: number;
}
