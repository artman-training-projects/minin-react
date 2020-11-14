import React from 'react';
import styles from './input.module.css';

interface IInput {
  type?: string;
  onChange: (evt: any) => void;
  label: string;
  errorMessage: string;
  valid: boolean;
  touched: boolean;
  value: string;
  shouldValidate: boolean;
}

function isInvalid(
  valid: boolean,
  touched: boolean,
  shouldValidate: boolean
): boolean {
  return !valid && shouldValidate && touched;
}

const Input: React.FC<IInput> = ({
  type,
  label,
  value,
  onChange,
  errorMessage,
  valid,
  touched,
  shouldValidate,
}): JSX.Element => {
  const inputType = type || 'text';
  const classes = [styles.input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(valid, touched, shouldValidate)) {
    classes.push(styles.invalid);
  }

  return (
    <div className={classes.join(' ')}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={inputType} id={htmlFor} value={value} onChange={onChange} />

      {isInvalid(valid, touched, shouldValidate) && <span>{errorMessage}</span>}
    </div>
  );
};

export default Input;
