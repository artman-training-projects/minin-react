import { TResult, TValidation } from './types';

export interface IResults {
  [key: string]: TResult;
}

export interface IState {
  [key: string]: any;
}

export interface IAction extends IState {
  type: string;
}

export interface IAnswer {
  test: string;
  id: number;
}

export interface IOption {
  text: string;
  value: number;
}

export interface IQuestionItem {
  question: string;
  id: string;
  rightAnswerId: number;
  answers: Array<IAnswer>;
}

export interface ILinks {
  to: string;
  title: string;
  exact: boolean;
}

export interface IConfigControl {
  id?: number;
  label: string;
  errorMessage: string;
}

export interface IValidation {
  valid: boolean;
  touched: boolean;
  value: string;
  validation: TValidation;
}

export interface IFormControls {
  [key: string]: IConfigControl & IValidation;
}
