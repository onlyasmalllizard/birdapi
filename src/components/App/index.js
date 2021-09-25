import { useState, useEffect } from 'react';
import './App.css';
import env from 'react-dotenv';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import BirdSearch from '../BirdSearch';
import FavouritesPage from '../FavouritesPage';
import Questions from '../Questions';

import questions from '../../libs/questions';

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
      <Router>
        <Header />

        <Questions questions={questions} />
        <Switch>
          <Route path="/favourites">
            <FavouritesPage
              favourites={favourites}
              buttonInfo={{
                buttonClass: 'favourites-button',
                buttonText: '−',
                ariaLabel: 'Remove from favourites',
                handleClick: removeBirdFromFavourites,
              }}
            />
          </Route>
          <Route path="/">
            <BirdSearch
              triggerApiCall={triggerApiCall}
              pending={pending}
              currentBird={currentBird}
              addBirdToFavourites={addBirdToFavourites}
            />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
