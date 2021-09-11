import React, { useState } from 'react';
import Button from '../Button';
import './input.css';

function Input({ submit, buttonClass }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);

    console.log(text);
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
        buttonClass={buttonClass}
        buttonText="Submit"
        handleClick={() => submit(text)}
      />
    </form>
  );
}

export default Input;