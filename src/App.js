import React from 'react';
import mainStyles from './main.module.css';

import Layout from './hoc/Layout'
export const AppContext = React.createContext({});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={mainStyles.Main_xl}>Hello React</h1>
      </header>
      <AppContext.Provider value={'USER'}>
        <Layout></Layout>
      </AppContext.Provider>
     
    </div>
  );
}

export default App;
