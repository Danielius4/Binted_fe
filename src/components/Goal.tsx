import './Comp-styles.css'

interface GoalProps {
    goal: string;
}

function Goal(props: GoalProps) {
  return (
    <div className="goal-box">
      <h2 >Goal</h2>
      <p>{props.goal}</p>
    </div>
  );
}

export default Goal;