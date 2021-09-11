import './image.css';
import Button from '../Button';

function Image({ source, alt, buttonInfo, id }) {
  const { buttonText, buttonClass, handleClick } = buttonInfo;
  return (
    <article>
      <img src={source} alt={alt} />
      <Button
        buttonClass={buttonClass}
        buttonText={buttonText}
        handleClick={() => handleClick(id)}
      />
    </article>
  );
}

export default Image;
