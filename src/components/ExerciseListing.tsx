import { Link } from "react-router-dom";
import Button from "./Button";

interface ExerciseListProps {
    id: string;
    name: string;
}

let createRecord = (id: string) => {
    console.log(`clicked ${id}`);
}

function ExerciseListing(props: ExerciseListProps) {
    return (
        <>
            <div className="exercise-listing-box d-flex justify-content-between">
                <Link className="link-underline-opacity-0 align-content-center" to={`/exercise/${props.id}`}><h2 className="mb-0">{props.name}</h2></Link>
                <Button className="" text="Add record" backgroundColor="#FFF7ED" textColor="#FFD60A" onClick={() => createRecord(props.id)} />
            </div>
            <p className="text-danger ms-2">3x Exercise records go here</p>
        </>
    );
}

export default ExerciseListing;