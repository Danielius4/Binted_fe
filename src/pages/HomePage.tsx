import React, { useState } from 'react';
import './../App.css';
import TextField from '../components/TextField';
import Header from '../components/Header';
import ExerciseList from '../components/ExerciseList';


function HomePage() {


  //fetch exercises from backend
  const exercises = [
    {
    id: 1,
    name: 'Bench Press'
    },
    {
      id: 2,
      name: 'Testing Press'
    }, {
      id: 3,
      name: 'Lifting Press'
    },
]

  const [textFieldValue, setTextFieldValue] = useState<string>("sa")
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <ExerciseList exercises={exercises} />
        <TextField placeholder='hello' onChange={setTextFieldValue} value={textFieldValue} type={'text'} />
      </main>
    </div>
  );
}

export default HomePage;
