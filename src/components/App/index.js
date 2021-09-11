import { useState, useEffect } from 'react';
import './App.css';
import Input from '../Input';
import ImageContainer from '../ImageContainer';
import env from 'react-dotenv';
import Pending from '../Pending';
import FavouritesPage from '../FavouritesPage';

const addButton = {
  buttonClass: 'add-button',
  buttonText: 'Add to Favourites',
};

const removeButton = {
  buttonClass: 'remove-button',
  buttonText: 'Remove from Favourites',
};

function App() {
  const [currentBird, setCurrentBird] = useState({ source: '', alt: '' });
  const [searchText, setSearchText] = useState('');
  const [pending, setPending] = useState(true);
  const [favourites, setFavourites] = useState([]);

  function triggerApiCall(text) {
    setSearchText(text);
  }

  function addFavourite() {
    setFavourites([...favourites, currentBird]);
  }

  function removeFavourite(index) {
    setFavourites([
      ...favourites.slice(0, index),
      ...favourites.slice(index + 1),
    ]);
  }

  useEffect(() => {
    setPending(true);
    async function getBird() {
      console.log('this is the body', JSON.stringify(searchText));
      const res = await fetch(
        'https://dall-e-bird-images-from-text.p.rapidapi.com/0.5.0',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'dall-e-bird-images-from-text.p.rapidapi.com',
            'x-rapidapi-key': env.API_KEY,
          },
          body: JSON.stringify({ text: searchText }),
        }
      );
      const data = await res.json();
      console.log('response data', data);
      setCurrentBird({
        ...currentBird,
        source: `data:image/gif;base64,${data.result}`,
        alt: searchText,
      });
      setPending(false);
    }
    getBird();
  }, [searchText]);

  return (
    <main className="App">
      <h1>Build-a-Bird</h1>
      <Input buttonClass="button" submit={triggerApiCall} />

      {pending ? (
        <Pending />
      ) : (
        <ImageContainer
          imageClass="bird-image"
          images={[currentBird]}
          buttonInfo={{ ...addButton, handleClick: addFavourite }}
        />
      )}

      <FavouritesPage
        favourites={favourites}
        buttonInfo={{ ...removeButton, handleClick: removeFavourite }}
      />
    </main>
  );
}

export default App;
