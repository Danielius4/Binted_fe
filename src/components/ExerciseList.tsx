import ExerciseListing from "./ExerciseListing";


interface Exercise {
    id: string;
    name: string;
}

interface ExerciseListProps {
    exercises: Exercise[];
}

function ExerciseList(props: ExerciseListProps) {
    return (
        <div className="exercise-list">
            <h1>My exercises</h1>
            <ul className="ps-0">
                {props.exercises.map((exercise) => (
                    <li key={exercise.id}>
                    <ExerciseListing id={exercise.id} name={exercise.name}/>
                    </li>
                ))}
            </ul>

        </div>
    );
}
export default ExerciseList;