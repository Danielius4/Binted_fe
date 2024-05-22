import React, { useEffect, useState } from 'react';
import './../App.css';
import TextField from '../components/TextField';
import Header from '../components/Header';
import ExerciseList, { Exercise } from '../components/ExerciseList';


function HomePage() {


  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true)
      const response = await fetch('http://localhost:8080/exercises')
      // mockExercises = await JSON.parse(response)
      setExercises(await response.json());
      setLoading(false)
    }
    fetchExercises() 

  }, [])


  const [textFieldValue, setTextFieldValue] = useState<string>("sa")

  return ( 
    <div className="App">
      <Header />
      <main className='main'>
        <ExerciseList exercises={exercises} />
        { !loading && <TextField placeholder='hello' onChange={setTextFieldValue} value={textFieldValue} type={'text'} />}
      </main>
    </div>
  );
}

export default HomePage;
