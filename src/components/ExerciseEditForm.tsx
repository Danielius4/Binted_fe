import { useState } from 'react';
import Modal from 'react-modal';
import Button from './Button';
import TextField from './TextField'; // Add this line
import { Console } from 'console';
import { Box, CircularProgress } from '@mui/material';

interface ExerciseEditFormProps {
        exerciseId: number;
        toggleEditForm: Function;
        nameProp: string;
        goalProp: string;
        fetchExercises: Function;
    }

function ExerciseEditForm({ exerciseId, toggleEditForm, nameProp, goalProp, fetchExercises}: ExerciseEditFormProps) {
    const [name, setName] = useState(nameProp);
    const [goal, setGoal] = useState(goalProp);
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        try {
            setLoading(true);
            let response = await fetch(`http://localhost:8080/exercise/${exerciseId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    goal
                }),
            });

            setLoading(false);

            if (response.status === 409) {
                if (window.confirm('Conflict occurred while updating. Do you want to overwrite the changes?')) {
                    handleSubmit(e);
                } else {
                    throw new Error('Cancelled by user');
                }
            }

            if (!response.ok) {
                throw new Error('Failed to update exercise');
            }   

        } catch (error) {
            console.error('Failed to update exercise', error);
        } finally {
            toggleEditForm();
            fetchExercises();
        }
    };

    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>
      }

    return (
        <form onSubmit={handleSubmit} className="exercise-form">
            <TextField style={{height:"20px"}} placeholder="Name" value={name} onChange={setName} />
            <TextField style={{height:"20px"}} placeholder="Goal" value={goal} onChange={setGoal} />
            <Button text={'Update'} onClick={handleSubmit}/>
        </form>
    );
}

export default ExerciseEditForm;