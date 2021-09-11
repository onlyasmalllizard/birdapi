import { v4 as uuidv4 } from 'uuid';
import Image from '../Image';

function ImageContainer({ images, imageClass, buttonInfo }) {
  return (
    <section>
      {images.map((image, index) => (
        <Image
          className={imageClass}
          source={image.source}
          alt={image.alt}
          key={uuidv4()}
          id={index}
          buttonInfo={buttonInfo}
        />
      ))}
    </section>
  );
}

export default ImageContainer;
