import Pagination from "@mui/material/Pagination";
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
  fetchExercises: Function;
  page: number;
  pageNumber: number;
  deleteExercises: Function;
}

function ExerciseList(props: ExerciseListProps) {

  return (
    <>
      <div className="exercise-list">
        <h1 className="mb-4">My exercises</h1>
        <ul className="ps-0">
          {props.exercises.map((exercise) => (
            <li key={exercise.id}>
              <ExerciseListing
                id={exercise.id}
                name={exercise.name}
                goal={exercise.goal}
                fetchExercises={props.fetchExercises}
                deleteExercise={props.deleteExercises}
              />
              <LogList logs={exercise.records} />
            </li>
          ))}
        </ul>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={props.page}
          page={props.pageNumber + 1}
          onChange={(event, selectedPage) =>
            props.fetchExercises(selectedPage-1)
          }
        />
      </div>
      <br />
    </>
  );
}
export default ExerciseList;
