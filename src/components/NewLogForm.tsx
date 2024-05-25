import Form from 'react-bootstrap/Form';
import Button from './Button';


interface NewLogFormProps {
    createForm?: any;
    exerciseId: number;
    fetchExercises?: Function;
}

function NewLogForm(props: NewLogFormProps) {

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const payload = Object.fromEntries(formData.entries());

        const exerciseId = props.exerciseId; // Replace this with the actual logic to get the exerciseId

        payload.exerciseId = exerciseId.toString();

        try {
            const response = await fetch('http://localhost:8080/record', { // Replace with your actual endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                props.createForm?.();
                (e.target as HTMLFormElement).reset();
            } else {
                console.error('Form submission failed', response.statusText);
            }
        } catch (error) {
            console.error('Form submission error', error);
        }
    };

    const today = new Date().toISOString().split('T')[0];


    return (
        <>
            <h4 className='new-log-heading'>Add new log</h4>
            <form onSubmit={submitForm} className="new-log-form">
                <Form.Control type="date" defaultValue={today} placeholder="Select date" name="date" required />
                <Form.Control type="number" placeholder="Weight" name="weight" required />
                <Form.Control type="number" placeholder="Reps" name="reps" required />
                <Form.Control type="number" placeholder="Sets" name="sets" required />
                <Form.Control as="textarea" placeholder="Comment" name="comment" className='new-log-textarea'/>
                <Button text='Submit'onClick={() => submitForm}/>
            </form>
        </>
    );
}

export default NewLogForm;