import React from 'react';

import Header from '../Header';
import styles from './styles.module.css';
import Gridd from '../Grid';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Gridd />
    </div>
  );
}

export default App;
