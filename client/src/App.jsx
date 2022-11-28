import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import InputCard from './components/InputCard';
import AddBookMark from './components/AddBookMark';
import SearchBar from './components/SearchBar';
import BookMarkCard from './components/BookMarkCard';
import { useEffect } from 'react';
import Axios from 'axios';


function App() {
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchQuery , setSearchQuery] = useState("");
    
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setCards(response.data);
      console.log("success");
    })
  }, [])

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setCards(response.data);
      console.log("success");
    })
  }, [open])

  return (
    <div className="App">
      <NavBar setShowSearchResults={setShowSearchResults} setSearchQuery={searchQuery}/>
      <AddBookMark setOpen={setOpen} />
      <SearchBar cards={cards} setSearchResult={setSearchResult} setShowSearchResults={setShowSearchResults} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div className={open ? 'helper-div show' : "helper-div"} style={{ margin: "0", left: "0", position: "absolute" }}> <InputCard setOpen={setOpen} setCards={setCards} /> </div>
      {
        !showSearchResults &&
         <div className="bookmarksCards-container">
          {
            cards.map((card, index) => {
              return <BookMarkCard key={index} cards={cards} setCards={setCards} title={card.bookmarkTitle} tags={card.bookmarkTags} url={card.bookmarkLink} description={card.bookmarkDescription} id={card._id} />
            })
          }
        </div>
      }
      {
        showSearchResults &&
        <div className="showsearch">
          <button className='backtoHome' onClick={()=>{setShowSearchResults(false); setSearchQuery("")}}>Back to home Page</button>
          <div className="bookmarksCards-container">
            {
              searchResult.map((card, index) => {
                return <BookMarkCard cards={cards} setCards={setCards} key={index} title={card.bookmarkTitle} tags={card.bookmarkTags} url={card.bookmarkLink} description={card.bookmarkDescription} id={card._id} />
              })
            }
          </div>
        </div>
      }
    </div>
  );
}

export default App;
