import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('')
  return (
    <div className="App">
      {/* Amout */}
      <input type="text" />
      {/* Percentage */}
      <input type="text" />
      {/* Output */}
    </div>
  );
}

export default App;
