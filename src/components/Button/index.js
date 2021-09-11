import './button.css';

function Button({ clickData, buttonInfo }) {
  const { buttonClass, ariaLabel, handleClick, disabled, buttonText } =
    buttonInfo;
  return (
    <button
      className={buttonClass}
      aria-label={ariaLabel}
      type="button"
      onClick={() => handleClick(clickData)}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;
