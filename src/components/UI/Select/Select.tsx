import React from 'react';
import styles from './select.module.css';
import { IOption } from '../../../types/interfaces';

interface ISelect {
  label: string;
  value: number;
  onChange: (evt: any) => void;
  options: Array<IOption>;
}

const Select: React.FC<ISelect> = ({
  label,
  value,
  options,
  onChange,
}): JSX.Element => {
  const htmlFor = `${label} - ${Math.random()}`;
  return (
    <div className={styles.select}>
      <label htmlFor={htmlFor}>{label}</label>
      <select id={htmlFor} value={value} onChange={onChange}>
        {options.map((option, index) => {
          return (
            <option key={option.value + index} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
