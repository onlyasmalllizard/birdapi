import ImageContainer from '../ImageContainer';

function FavouritesPage({ favourites, buttonInfo }) {
  return (
    <section>
      <h2>Your Favourite Birds</h2>
      <ImageContainer
        images={favourites}
        imageClass="favourite-image"
        buttonInfo={buttonInfo}
      />
    </section>
  );
}

export default FavouritesPage;
