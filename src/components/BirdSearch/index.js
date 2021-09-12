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
      <Input submit={triggerApiCall} pending={pending} />
      {pending ? (
        <Pending />
      ) : (
        <ImageContainer
          containerClass="single"
          images={[currentBird]}
          buttonInfo={{
            buttonClass: '',
            disabled: false,
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
