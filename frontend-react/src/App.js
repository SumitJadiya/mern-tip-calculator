import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [amount, setAmount] = useState('')
  const [percentage, setPercentage] = useState('')
  const [tip, setTip] = useState('Tip Goes Here')

  return (
    <div className="App">
      {/* Amount */}
      <input type="text" placeholder="Please add the Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      {/* Percentage */}
      <input type="text" placeholder="Please add the percentage" value={percentage} onChange={e => setPercentage(e.target.value)} />
      {/* Output */}
      <h1>{tip}</h1>
    </div>
  );
}

export default App;
