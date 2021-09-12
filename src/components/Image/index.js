import './image.css';
import Button from '../Button';

function Image({ source, imageDescription, buttonInfo, id }) {
  return (
    <article className="bird-card">
      <img src={source} alt={imageDescription} />
      <section className="image-info">
        <p>{imageDescription}</p>
        <Button buttonInfo={{ ...buttonInfo, id }} />
      </section>
    </article>
  );
}

export default Image;
