import './button.css';

function Button({ handleClick, buttonText, buttonClass, ariaLabel }) {
  return (
    <button
      className={buttonClass}
      aria-label={ariaLabel}
      type="button"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
