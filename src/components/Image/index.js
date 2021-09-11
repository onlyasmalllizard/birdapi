import './image.css';
import Button from '../Button';

function Image({ source, imageDescription, buttonInfo, id }) {
  const { buttonText, buttonClass, handleClick } = buttonInfo;
  return (
    <article>
      <img src={source} alt={imageDescription} />
      <section className="image-info">
        <p>{imageDescription}</p>
        <Button
          buttonClass={buttonClass}
          buttonText={buttonText}
          handleClick={() => handleClick(id)}
        />
      </section>
    </article>
  );
}

export default Image;
