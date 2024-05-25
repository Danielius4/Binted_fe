import React, { useEffect, useState } from 'react';
import './../App.css';
import TextField from '../components/TextField';
import Header from '../components/Header';
import ExerciseList, { Exercise } from '../components/ExerciseList';
import ExerciseCreateForm from '../components/ExerciseCreateForm';


function HomePage() {


  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [newExerciseId, setNewExerciseId] = useState<Number>()


  useEffect(() => {
   
    fetchExercises() 

  }, [newExerciseId])

  const fetchExercises = async () => {
    setLoading(true)
    const response = await fetch('http://localhost:8081/exercises')
    // mockExercises = await JSON.parse(response)
    setExercises(await response.json());
    setLoading(false)
  }
  if (loading) {
    return <>Loading...</>
  }

  return ( 
    <div className="App">
      <Header />
      <main className='main'>
        <ExerciseList exercises={exercises} fetchExercises={fetchExercises} />
        <ExerciseCreateForm setNewExerciseId={setNewExerciseId}/>
      </main>
    </div>
  );
}

export default HomePage;
