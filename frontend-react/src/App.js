import React from 'react';
import './App.css';
import { useState } from 'react';
import { Form, Button, Col, InputGroup, Container } from 'react-bootstrap';


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
      setTip(`Total Amount after Tip is -> ₹. ${data.toBePayed}/-`)
      setAmount('')
      setPercentage('')
    })
  }

  return (
    <div className="App">
      <Container>
        <Form style={{ border: '1px solid #999', padding: '10px', marginTop: '20px' }}>
          <Form.Row className="align-items-center" style={{ marginTop: '20px' }}>
            <Col>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Amount</InputGroup.Text>
                </InputGroup.Prepend>
                {/* Amount */}
                <Form.Control type="text" placeholder="Please add the Amount" value={amount} onChange={e => setAmount(e.target.value)} autoFocus />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Form.Row>
          <Form.Row style={{ marginTop: '20px' }}>
            <Col>
              {/* Percentage */}
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Tip %</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="Please add the percentage" value={percentage} onChange={e => setPercentage(e.target.value)} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Form.Row>
          <Form.Row style={{ textAlign: 'center', display: 'block', marginTop: '20px' }}>
            {/* Button */}
            <Button onClick={calculateTip}>Calculate My Tip</Button>
            {/* Output */}
            <br />
            <h1 style={{ marginTop: '20px' }}>{tip}</h1>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
