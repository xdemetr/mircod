import React from 'react';

import styles from './App.module.sass';
import './App.sass';
import Options from '../Options';
import Constructor from '../Constructor';

const App = () => {
  return (
    <div className={styles.app}>
      <main className={styles.appMain}>

        <Options/>

        <section className={styles.appConstructor}>
          <Constructor/>
        </section>

      </main>
    </div>
  );
};

export default App;
