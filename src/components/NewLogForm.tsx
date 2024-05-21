import Form from 'react-bootstrap/Form';
import Button from './Button';


interface NewLogFormProps {
    createForm?: any;
}

function NewLogForm(props: NewLogFormProps) {

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const payload = Object.fromEntries(formData.entries());
        console.log(payload)
        // Send the payload to the Backend
        props.createForm?.();
        (e.target as HTMLFormElement).reset();
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