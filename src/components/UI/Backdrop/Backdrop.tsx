import React from 'react';
import styles from './backdrop.module.css';

const Backdrop: React.FC<any> = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

export default Backdrop;
