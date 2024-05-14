import { Link } from "react-router-dom";


interface Exercise {
    id: number;
    name: string;
}

interface ExerciseListProps {
    exercises: Exercise[];
}

function ExerciseList(props: ExerciseListProps) {
    return (
        <div>
            <h1>My exercises</h1>
            <ul>
                {props.exercises.map((exercise) => (
                    <li key={exercise.id}><Link to={`/exercise/${exercise.id}`}>Exercise {exercise.name}</Link></li>
                ))}
            </ul>

        </div>
    );
}
export default ExerciseList;