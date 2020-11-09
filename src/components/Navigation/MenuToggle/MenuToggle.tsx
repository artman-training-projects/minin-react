import React from 'react';
import styles from './menuToggle.module.css';

interface IMenuToggle {
  isOpen: any;
  onToggle: any;
}

const MenuToggle: React.FC<IMenuToggle> = ({ isOpen, onToggle }) => {
  const classes = [styles.menuToggle, 'fa'];

  if (isOpen) {
    classes.push('fa-times');
    classes.push(styles.open);
  } else {
    classes.push('fa-bars');
  }

  return <i className={classes.join(' ')} onClick={onToggle} />;
};

export default MenuToggle;
