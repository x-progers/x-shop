import React from 'react';
import './App.css';
import { TestComponent } from '@components/components';
import {Test} from '@constants/constants'


function App() {
  return (
    <div className="App">
      <TestComponent/>
      <Test/>
      <h1>X-Progers</h1>
      <h2>New-Progers</h2>
    </div>
  );
}

export default App;
