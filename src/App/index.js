import React from 'react';


import Header from '../Header';
import styles from './styles.module.scss';
import Grid from '../Grid';

const App = () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.contentContainer}>
      <Grid />
    </div>
  </div>
)

export default App;
