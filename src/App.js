import React from 'react';
import mainStyles from './main.module.css';

import Layout from './hoc/Layout';
import Quiz from './containers/Quiz/Quiz';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={mainStyles.Main_xl}>Hello React</h1>
      </header>
    
        <Layout>
          <Quiz/>
        </Layout>
      
     
    </div>
  );
}

export default App;
