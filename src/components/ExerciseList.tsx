import ExerciseListing from "./ExerciseListing";
import LogList from "./LogList";

interface Log {
    id: string;
    date: string;
    weight: number;
    reps: number;
    sets: number;
    comment: string;
}

export interface Exercise {
    id: string;
    name: string;
    goal: string;
    records: Log[];
}

interface ExerciseListProps {
    exercises: Exercise[];
    fetchExercises: () => void;
}

function ExerciseList(props: ExerciseListProps) {

    console.log(props.exercises);

    return (
        <div className="exercise-list">
            <h1 className="mb-4">My exercises</h1>
            <ul className="ps-0">
                {props.exercises.map((exercise) => (
                    <li key={exercise.id}>
                    <ExerciseListing id={exercise.id} name={exercise.name} fetchExercises={props.fetchExercises}/>
                    <LogList logs={exercise.records} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ExerciseList;