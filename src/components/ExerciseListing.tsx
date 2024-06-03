import { Link } from "react-router-dom";
import Button from "./Button";
import NewLogForm from "./NewLogForm";
import ExerciseEditForm from "./ExerciseEditForm"; // Import the form component
import { useState, useEffect } from "react";

interface ExerciseListProps {
  id: string;
  name: string;
  goal: string;
  fetchExercises: Function;
  deleteExercise: Function;
}

function ExerciseListing(props: ExerciseListProps) {
  const [showForm, setShowForm] = useState(false);
  const [show, setShow] = useState(showForm);
  const [animationClass, setAnimationClass] = useState("");

  const [showEditForm, setShowEditForm] = useState(false); // New state for toggling the edit form

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  let createRecord = (id: string) => {
    if (showForm) {
      setAnimationClass("form-exit");
      setTimeout(() => setShow(false), 300); // Match the duration with your CSS animation duration
    } else {
      setShow(true);
      setAnimationClass("form-enter");
    }
    setShowForm(!showForm);
  };

  useEffect(() => {
    if (showForm) {
      setAnimationClass("form-enter");
    } else {
      setAnimationClass("form-exit");
    }
  }, [showForm]);

  return (
    <>
      {!showEditForm && (
        <>
          <div className="exercise-listing-box d-flex justify-content-between">
            <Link
              className="link-underline-opacity-0 align-content-center"
              to={`/exercise/${props.id}`}
            >
              <h2 className="mb-0">{props.name}</h2>
            </Link>
            <Button
              className=""
              text="Add record"
              backgroundColor="#FFF7ED"
              textColor="#FFD60A"
              onClick={() => createRecord(props.id)}
            />
            <Button className="" text="Edit" onClick={toggleEditForm} />
            <Button className="" text="Delete" onClick={() => props.deleteExercise(props.id)} />
          </div>
          <div id="toggle">
            {show && (
              <div className={animationClass}>
                <NewLogForm
                  exerciseId={parseInt(props.id)}
                  createForm={() => createRecord(props.id)}
                  fetchNewLogs={props.fetchExercises}
                />
              </div>
            )}
          </div>
        </>
      )}
      {showEditForm && (
        <ExerciseEditForm
          exerciseId={parseInt(props.id)}
          toggleEditForm={toggleEditForm}
            nameProp={props.name}
            goalProp={props.name}
            fetchExercises={props.fetchExercises}
          />
      )}
    </>
  );
}

export default ExerciseListing;
