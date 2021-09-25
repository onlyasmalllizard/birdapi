import React, { useState } from 'react';
import Button from '../Button';
import './input.css';

function Input({ submit, pending }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <form className="form">
      <input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder="Describe your ideal bird..."
        aria-label="Describe your ideal bird"
      />
      <Button
        clickData={text}
        buttonInfo={{
          buttonClass: 'get-bird',
          handleClick: submit,
          disabled: pending,
          buttonText: 'Go!',
        }}
      />
    </form>
  );
}

export default Input;
