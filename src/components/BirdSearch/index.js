import Input from '../Input';
import Pending from '../Pending';
import ImageContainer from '../ImageContainer';
import './birdSearch.css';

function BirdSearch({
  triggerApiCall,
  pending,
  currentBird,
  addBirdToFavourites,
}) {
  return (
    <section className="bird-search">
      <Input submit={triggerApiCall} pending={pending} />
      {pending ? (
        <Pending />
      ) : (
        <ImageContainer
          containerClass="single"
          images={[currentBird]}
          buttonInfo={{
            buttonClass: 'favourites-button',
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
