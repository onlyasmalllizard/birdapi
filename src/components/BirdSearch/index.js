import Input from '../Input';
import Pending from '../Pending';
import ImageContainer from '../ImageContainer';

function BirdSearch({
  triggerApiCall,
  pending,
  currentBird,
  addBirdToFavourites,
}) {
  return (
    <section>
      <Input submit={triggerApiCall} />
      {pending ? (
        <Pending />
      ) : (
        <ImageContainer
          images={[currentBird]}
          buttonInfo={{
            ariaLabel: 'Add to favourites',
            buttonText: '❤',
            handleClick: addBirdToFavourites,
          }}
        />
      )}
    </section>
  );
}

export default BirdSearch;
