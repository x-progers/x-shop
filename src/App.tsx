import React from 'react';
import './App.css';
import { TestComponent } from '@components';
import { Test } from '@constants';


 

function App() {
  return (
    <div className="App">
      <TestComponent/>
      <h1>X-Progers</h1>
      <h2>{Test}</h2>
    </div>
  );
}

export default App;
