import React from 'react';
import styles from './backdrop.module.css';

interface IBackdrop {
  onClick: () => void;
}

const Backdrop: React.FC<IBackdrop> = ({ onClick }): JSX.Element => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

export default Backdrop;
