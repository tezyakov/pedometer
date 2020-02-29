import React from 'react';


import Header from '../Header';
import styles from './styles.module.scss';
import Gridd from '../Grid';

const App = () => (
  <div className={styles.container}>
    <div className={styles.header}>
     <Header />
    </div>
    <div className={styles.contentContainer}>
     <Gridd />
    </div>
  </div>
)

export default App;
