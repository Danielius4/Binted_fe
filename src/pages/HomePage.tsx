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
  const [page, setPage] = useState(1)
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
   
    fetchExercises() 

  }, [newExerciseId])

  const fetchExercises = async (pageNumber?:number) => {
    setLoading(true)
    const response = await fetch(`http://localhost:8080/exercises?page=${pageNumber}`)
    let data = await response.json()
    setPage(data["totalPages"])
    setPageNumber(data["number"])
    setExercises(data["content"])
    setLoading(false)
  }
  if (loading) {
    return <>Loading...</>
  }

  return ( 
    <div className="App">
      <Header />
      <main className='main'>
        <ExerciseList exercises={exercises} page={page} pageNumber={pageNumber} fetchExercises={fetchExercises} />
        <ExerciseCreateForm setNewExerciseId={setNewExerciseId}/>
      </main>
    </div>
  );
}

export default HomePage;
