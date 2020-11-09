import React, { Component } from 'react';
import styles from './drawer.module.css';
import Backdrop from '../../UI/Backdrop';

const links: any[] = [1, 2, 3];

class Drawer extends Component<any, any> {
  render() {
    const classes = [styles.drawer];

    if (!this.props.isOpen) {
      classes.push(styles.close);
    }

    return (
      <>
        <nav className={classes.join(' ')}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a>Link {link}</a>
              </li>
            ))}
          </ul>
        </nav>

        {this.props.isOpen && <Backdrop onClick={this.props.onClose} />}
      </>
    );
  }
}

export default Drawer;
