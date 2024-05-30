import React, { useEffect, useState } from 'react';
import './../App.css';
import TextField from '../components/TextField';
import Header from '../components/Header';
import ExerciseList, { Exercise } from '../components/ExerciseList';
import ExerciseCreateForm from '../components/ExerciseCreateForm';
import { Box, CircularProgress } from '@mui/material';

function HomePage() {

  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [newExerciseId, setNewExerciseId] = useState<Number>()
  const [deletedExerciseId, setDeletedExerciseId] = useState<Number>()
  const [page, setPage] = useState(1)
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
   
    fetchExercises() 

  }, [newExerciseId, deletedExerciseId])

  const fetchExercises = async (pageNumber?:number) => {
    setLoading(true)
    const response = await fetch(`http://localhost:8080/exercises?page=${pageNumber}`)
    let data = await response.json()
    setPage(data["totalPages"])
    setPageNumber(data["number"])
    setExercises(data["content"])
    setLoading(false)
  }

async function deleteExercise(id: string): Promise<void> {
  const url = `http://localhost:8080/exercise?id=${id}`;
  
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to delete exercise:', error);
  }
  setDeletedExerciseId(Number(id));
}


  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
    </Box>
  }

  return ( 
    <div className="App">
      <Header />
      <main className='main'>
        <ExerciseList exercises={exercises} page={page} pageNumber={pageNumber} fetchExercises={fetchExercises} deleteExercises={deleteExercise}/>
        <ExerciseCreateForm setNewExerciseId={setNewExerciseId}/>
      </main>
    </div>
  );
}

export default HomePage;
