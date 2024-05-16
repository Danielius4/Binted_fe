import React, { useState } from 'react';
import './../App.css';
import TextField from '../components/TextField';
import Header from '../components/Header';
import ExerciseList from '../components/ExerciseList';


function HomePage() {


  //fetch exercises from backend
  let mockExercises = [{
    id: "12edwad3",
    name: 'Mock exercise lift',
    goal: 'Get a one rep max of 60kg',
    records: [
      {
        id: "12edd3",
        date: '2021-09-01',
        weight: 50,
        reps: 5,
        sets: 3,
        comment: 'This was a good workout'
      },
      {
        id: "12edwad3",
        date: '2021-09-03',
        weight: 55,
        reps: 5,
        sets: 3,
        comment: 'I was able to get a max of 50kg today!'
      },
      {
        id: "12awdawd3",
        date: '2021-09-05',
        weight: 60,
        reps: 5,
        sets: 3,
        comment: 'I did not have enough energy today to get any good lifts'
      },
    ]
  },
  {
    id: "12edwad3",
    name: 'Mock exercise lift2',
    goal: 'Get a one rep max of 90kg',
    records: [{
      id: "12edd3",
      date: '2023-09-01',
      weight: 50,
      reps: 5,
      sets: 3,
      comment: 'This was a good workout'
    },
    {
      id: "12edwad3",
      date: '2024-09-03',
      weight: 55,
      reps: 5,
      sets: 3,
      comment: 'I was able to get a max of 50kg today!'
    },
    {
      id: "12awdawd3",
      date: '2025-09-05',
      weight: 60,
      reps: 5,
      sets: 3,
      comment: 'I did not have enough energy today to get any good lifts'
    }
    ]}]


  const [textFieldValue, setTextFieldValue] = useState<string>("sa")
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <ExerciseList exercises={mockExercises} />
        <TextField placeholder='hello' onChange={setTextFieldValue} value={textFieldValue} type={'text'} />
      </main>
    </div>
  );
}

export default HomePage;
