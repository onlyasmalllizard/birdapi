import './image.css';
import Button from '../Button';

function Image({ image, imageClass, buttonInfo, id }) {
  return (
    <article className={`bird-card ${imageClass}`}>
      <img src={image.source} alt={image.description} />
      <section className="image-info">
        <p>{image.description}</p>
        <Button buttonInfo={{ ...buttonInfo, id }} />
      </section>
    </article>
  );
}

export default Image;
