/* eslint-disable react-hooks/exhaustive-deps */
import Goal from "../components/Goal";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import LogList from "../components/LogList";
import NewLogForm from "../components/NewLogForm";
import { useEffect, useState } from "react";
import { Exercise } from "../components/ExerciseList";
import { Box, CircularProgress } from "@mui/material";


function ExercisePage() {
    const params = useParams<{exerciseId: string}>();

    const [exercise, setExercise] = useState<Exercise>()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchExercises = async () => {
            setLoading(true)
            const response = await fetch('http://localhost:8080/exercise?id=' + params.exerciseId)
            let res = await response.json()
            res.id= params.exerciseId || 0
            setExercise(res);
            setLoading(false)
        }
        fetchExercises()

    }, [])

        if (loading) {
            return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        }


        return(
        <div>
            <Header />
            { exercise && <main className="main">
                    <h1>{exercise.name}, ID:{exercise.id}</h1>
                    <Goal goal={exercise.goal} />
                    <LogList logs={exercise.records}/>
                    <NewLogForm exerciseId={parseInt(exercise.id) || 0}/>
            </main>}

        </div>
    )
}

export default ExercisePage;