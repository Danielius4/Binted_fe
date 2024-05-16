
interface Log {
    id: string;
    date: string;
    weight: number;
    reps: number;
    sets: number;
    comment: string;
}

function LogListing(props : {log: Log}) {
    return (
        <div className="log-listing-box">
            <span>{props.log.date}</span>
            <span>{props.log.weight}</span>
            <span>{props.log.reps}</span>
            <span>{props.log.sets}</span>
            <div className="tooltip">{props.log.comment}</div>
        </div>
    );
}

export default LogListing;