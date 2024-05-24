import { Link } from "react-router-dom";
import Button from "./Button";
import NewLogForm from "./NewLogForm";
import { useState, useEffect } from "react";

interface ExerciseListProps {
    id: string;
    name: string;
    fetchExercises?: () => void;
}

function ExerciseListing(props: ExerciseListProps) {
    const [showForm, setShowForm] = useState(false);
    const [show, setShow] = useState(showForm);
    const [animationClass, setAnimationClass] = useState('');

    let createRecord = (id: string) => {
        if (showForm) {
            setAnimationClass('form-exit');
            setTimeout(() => setShow(false), 300); // Match the duration with your CSS animation duration
        } else {
            setShow(true);
            setAnimationClass('form-enter');
        }
        setShowForm(!showForm);
    }

    useEffect(() => {
        if (showForm) {
            setAnimationClass('form-enter');
        } else {
            setAnimationClass('form-exit');
        }
    }, [showForm]);

    return (
        <>
            <div className="exercise-listing-box d-flex justify-content-between">
                <Link className="link-underline-opacity-0 align-content-center" to={`/exercise/${props.id}`}><h2 className="mb-0">{props.name}</h2></Link>
                <Button className="" text="Add record" backgroundColor="#FFF7ED" textColor="#FFD60A" onClick={() => createRecord(props.id)} />
            </div>
            <div id="toggle">
                {show && (
                    <div className={animationClass}>
                        <NewLogForm exerciseId={parseInt(props.id)} createForm={() => createRecord(props.id)} fetchExercises={props.fetchExercises}/>
                    </div>
                )}
            </div>
        </>
    );
}

export default ExerciseListing;
