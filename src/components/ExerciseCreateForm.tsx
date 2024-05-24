import Form from "react-bootstrap/Form";
import Button from "./Button";
import TextField from "./TextField";
import { useState } from "react";

export default function ExerciseCreateForm() {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');

  const submitForm = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const goal = formData.get('goal');

    const requestBody = {
      id: 1,
      name: name,
      goal: goal,
      record: []
    };

    try {
      const response = await fetch('http://localhost:8081/exercise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      (e.target).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={submitForm} className="exercise-form">
      <div className="exercise-form-text-fields">
        <div className="exercice-form-first-text-field">
          <TextField
            value={name}
            name={"name"}
            onChange={setName}
            placeholder="Enter name"
          />
        </div>
        <TextField
          value={goal}
          name={"goal"}
          onChange={setGoal}
          placeholder="What is your goal?"
        />
      </div>
      <Button text="Create" onClick={() => submitForm} />
    </form>
  );
}
