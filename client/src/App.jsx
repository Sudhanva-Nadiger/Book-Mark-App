import './App.css';
import React, { useState} from 'react';
import NavBar from './components/NavBar';
import InputCard from './components/InputCard';
import AddBookMark from './components/AddBookMark';
import SearchBar from './components/SearchBar';

function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="App">
      <NavBar />
      <AddBookMark setOpen={setOpen}/>
      <SearchBar/>
     <div className={open ? 'helper-div show' : "helper-div"} style={{margin:"0", left:"0",position:"absolute"}}> <InputCard setOpen={setOpen}/> </div>
    </div>
  );
}

export default App;
