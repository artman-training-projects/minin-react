import React, { ReactChild } from 'react';
import styles from './layout.module.css'

interface ILayout {
  children: ReactChild;
}

const Layout: React.FC<ILayout> = ({children}) => {
  return (
    <div className={styles.layout}>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;
