import { useState, useEffect } from 'react';
import './App.css';
import BirdSearch from '../BirdSearch';
import env from 'react-dotenv';
import FavouritesPage from '../FavouritesPage';

function App() {
  const [currentBird, setCurrentBird] = useState({
    source: '',
    description: '',
  });
  const [searchText, setSearchText] = useState('');
  const [pending, setPending] = useState(false);
  const [favourites, setFavourites] = useState([]);

  function triggerApiCall(text) {
    setSearchText(text);
  }

  function addBirdToFavourites() {
    setFavourites([...favourites, currentBird]);
  }

  function removeBirdFromFavourites(index) {
    setFavourites([
      ...favourites.slice(0, index),
      ...favourites.slice(index + 1),
    ]);
  }

  useEffect(() => {
    setPending(true);
    async function getBird() {
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
      setCurrentBird({
        source: `data:image/gif;base64,${data.result}`,
        description: searchText,
      });
      setPending(false);
    }
    getBird();
  }, [searchText]);

  return (
    <main className="App">
      <h1>Build-a-Bird</h1>
      <BirdSearch
        triggerApiCall={triggerApiCall}
        pending={pending}
        currentBird={currentBird}
        addBirdToFavourites={addBirdToFavourites}
      />

      <FavouritesPage
        favourites={favourites}
        buttonInfo={{
          buttonText: '−',
          ariaLabel: 'Remove from favourites',
          handleClick: removeBirdFromFavourites,
        }}
      />
    </main>
  );
}

export default App;
