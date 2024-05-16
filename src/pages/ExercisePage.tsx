import Goal from "../components/Goal";
import Header from "../components/Header";
import { useParams } from "react-router-dom";


function ExercisePage() {
    const params = useParams<{exerciseId: string}>();

    // fetch exercise data from the server by ID

    let mockExercise = {
        id: params.exerciseId,
        name: 'Mock exercise lift',
        goal: 'Get a one rep max of 60kg',
        records: [
            {
                id:"12edd3",
                date: '2021-09-01',
                weight: 50,
                reps: 5,
                sets: 3,
                comment: 'This was a good workout'
            },
            {
                id: "12edwad3",
                date: '2021-09-03',
                weight: 55,
                reps: 5,
                sets: 3,
                comment: 'I was able to get a max of 50kg today!'
            },
            {
                id: "12awdawd3",
                date: '2021-09-05',
                weight: 60,
                reps: 5,
                sets: 3,
                comment: 'I did not have enough energy today to get any good lifts'
            },
        ]
    }

        return(
        <div>
            <Header />
            <main className="main">
                    <h1>{mockExercise.name}, ID:{mockExercise.id}</h1>
                    <Goal goal={mockExercise.goal} />
                    <div className="text-danger">List records here</div>
            </main>

        </div>
    )
}

export default ExercisePage;