import React, { useState } from 'react';
import './App.css';
import Goal from './components/Goal';
import TextField from './components/TextField';
import Header from './components/Header';


function App() {
  const [textFieldValue, setTextFieldValue] = useState<string>("sa")
  return (
    <div className="App">
      <Header />
      <Goal goal="Get a one rep max of 60kg Get a one rep max of 60kg Get a one rep max of 60kg Get a one rep max of 60kg Get a one rep max of 60kg Get a one rep max of 60kg Get a one rep max of 60kg Get a one rep max of 60kg"/>
      <TextField placeholder='hello' onChange={setTextFieldValue} value={textFieldValue} type={'text'}/>
    </div>
  );
}

export default App;
