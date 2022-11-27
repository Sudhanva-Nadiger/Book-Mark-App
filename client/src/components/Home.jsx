
import React from 'react'
import NavBar from './components/NavBar';
import InputCard from './components/InputCard';
import AddBookMark from './components/AddBookMark';
import SearchBar from './components/SearchBar';
import BookMarkCard from './components/BookMarkCard';
import { useEffect,useState } from 'react';
import Axios from 'axios';



const Home = () => {
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setCards(response.data);
      console.log("success");
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <AddBookMark setOpen={setOpen} />
      <SearchBar />
      <div className={open ? 'helper-div show' : "helper-div"} style={{ margin: "0", left: "0", position: "absolute" }}> <InputCard setOpen={setOpen} setCards={setCards} /> </div>
      <div className="bookmarksCards-container">
        {
          cards.map((card,index)=>{
            return <BookMarkCard key={index} title={card.bookmarkTitle} tags={card.bookmarkTags} url={card.bookmarkLink} description={card.bookmarkDescription} id = {card._id}/>
          })
        }
      </div>
    </div>
  )
}

export default Home


