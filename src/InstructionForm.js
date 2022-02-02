import React from 'react';
import { useState } from 'react';

export default function InstructionForm({ setInstructionsArray, instructionsArray }) {
  const [instructionInput, setInstructionInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructionsArray([...instructionsArray, instructionInput]);
    setInstructionInput('');
  }

  function handleChange(e) {
    setInstructionInput(e.target.value);
  }

  return <section>
    <form onSubmit={handleSubmit}>
        Add Special Instructions:
      <input onChange={handleChange} />
      <button>Submit</button>
    </form>
  </section>;
}
