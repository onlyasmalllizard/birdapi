import './image.css';
import Button from '../Button';

function Image({ source, alt, buttonInfo, id }) {
  const { buttonText, buttonClass, handleClick } = buttonInfo;
  return (
    <div className="image-container">
      <img src={source} alt={alt} />
      <Button
        buttonClass={buttonClass}
        buttonText={buttonText}
        handleClick={() => handleClick(id)}
      />
    </div>
  );
}

export default Image;
