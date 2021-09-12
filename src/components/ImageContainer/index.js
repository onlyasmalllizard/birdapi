import { v4 as uuidv4 } from 'uuid';
import Image from '../Image';
import './imageContainer.css';

function ImageContainer({ containerClass, images, imageClass, buttonInfo }) {
  return (
    <section className={containerClass}>
      {images.map((image, index) => (
        <Image
          className={imageClass}
          source={image.source}
          imageDescription={image.description}
          key={uuidv4()}
          id={index}
          buttonInfo={buttonInfo}
        />
      ))}
    </section>
  );
}

export default ImageContainer;
