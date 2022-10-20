import React, { useState } from 'react';
import './App.css';
import Add from './component/Add';
import Filter from './component/Filter';
import MovieList from './component/MovieList';
import NavBar from './component/NavBar';
import {moviesData} from './component/MovieData'


function App() {
  const [search,setSearch]=useState('')
  const [SearchRating,setSearchRating]=useState('')
  const [movielist,setmovielist]=useState(moviesData)

  const addHandler=(newmovie)=>{
    setmovielist(
      [...movielist,newmovie]

    )
    
  }

  return (
    <div className="App">
    
    <NavBar/>
    <Filter setSearch={setSearch} setSearchRating={setSearchRating}/>
    <Add addHandler={addHandler}/>
    <MovieList movielist={movielist} search={search} SearchRating={SearchRating}/>
    
    </div>
  );
}

export default App;
