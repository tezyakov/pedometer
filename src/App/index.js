import React from 'react';


import Header from '../Header';
import styles from './styles.module.scss';
import Gridd from '../Grid';

const App = () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.contentContainer}>
      <Gridd />
    </div>
  </div>
)

export default App;
