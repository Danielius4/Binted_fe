import LogListing from "./LogListing";

interface Log {
    id: string;
    date: string;
    weight: number;
    reps: number;
    sets: number;
    comment: string;
}

function LogList(props: { logs: Log[] }) {

  return (
    <>
    {props.logs.length > 0 &&
    <div className="log-list-label">
        <span>Date</span>
        <span>Weight</span>
        <span>Reps</span>
        <span>Sets</span>
    </div>
    }
    <ul className="log-list mb-5">
      {props.logs.map((log) => (
        <li key={log.id}>
            <LogListing log={log} />
        </li>
      ))}
    </ul>
    </>
  );
}

export default LogList;