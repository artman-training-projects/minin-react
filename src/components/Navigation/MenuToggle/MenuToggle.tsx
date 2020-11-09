import React from 'react';
import styles from './menuToggle.module.css';

interface IMenuToggle {
  isOpen: boolean;
  onToggle: () => void;
}

const MenuToggle: React.FC<IMenuToggle> = ({
  isOpen,
  onToggle,
}): JSX.Element => {
  const classes: Array<string> = [styles.menuToggle, 'fa'];

  if (isOpen) {
    classes.push('fa-times');
    classes.push(styles.open);
  } else {
    classes.push('fa-bars');
  }

  return <i className={classes.join(' ')} onClick={onToggle} />;
};

export default MenuToggle;
