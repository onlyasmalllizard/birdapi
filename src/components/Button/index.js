import './button.css';

function Button({ handleClick, buttonText, buttonClass }) {
  return (
    <button className = {buttonClass} type="button" onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default Button;
