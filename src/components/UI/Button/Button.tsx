import React, { ReactChild } from 'react';
import styles from './button.module.css';

interface IButton {
  children: ReactChild;
  type: string;
  disabled?: boolean;
  onClick?: any;
}

const Button: React.FC<IButton> = ({
  children,
  type,
  disabled,
  onClick,
}): JSX.Element => {
  const classes: Array<string> = [styles.button, styles[type]];

  return (
    <button className={classes.join(' ')} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
