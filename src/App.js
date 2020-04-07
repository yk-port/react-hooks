import React from 'react';
import './App.css';
import CounterHook from './components/CounterHook';
import FormHook from './components/FormHook';

function App() {
  return (
    <div className="App">
      <CounterHook />
      <FormHook />
    </div>
  );
}

export default App;
