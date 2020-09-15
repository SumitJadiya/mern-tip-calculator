import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('')
  const [percentage, setPercentage] = useState('')
  const [tip, setTip] = useState('')

  const calculateTip = e => {
    e.preventDefault()

    const data = {
      amount: amount,
      tip: percentage
    }

    fetch('http://localhost:9000/api/v1/calculateTip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      return res.json()
    }).then((data) => {
      setTip(data.toBePayed)
    })
  }

  return (
    <div className="App">
      {/* Amount */}
      <input type="text" placeholder="Please add the Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      {/* Percentage */}
      <input type="text" placeholder="Please add the percentage" value={percentage} onChange={e => setPercentage(e.target.value)} />
      {/* Button */}
      <button onClick={calculateTip}>Calculate My Tip</button>
      {/* Output */}
      <h1>{tip}</h1>
    </div>
  );
}

export default App;
