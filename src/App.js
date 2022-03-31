import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import MoveList from './components/MoveList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import axios from 'axios';
import AddFavorite from './components/AddFavorite';

function App() {

  
  const [movies, setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('');
  const [favourites,setFavourites] =useState([]);
  const getMovieRequest = async (searchValue) => {

    const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=768c25c3`);
    const data = await response.data; 
    
    if(data.Search){
      setMovies(data.Search)
    }
    
  };

  useEffect(()=>{

    getMovieRequest(searchValue);
    
  },[searchValue]);

  const AddFavoriteMovie = (movie) =>{
    const newFavoriteList = [...favourites,movie]
    setFavourites(newFavoriteList);
  }
  
  return (
    <div className="container-fluid movie-app">

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading header='Movies' />

        <SearchBox 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
         />
      </div>

      <div className="row">
      <MoveList 
        movies ={movies}
        handleFavoritesClick={AddFavoriteMovie}
        favoriComponent={AddFavorite}
      />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading ='Favourites' />
      </div>
      <div className="row">
        <MoveList 
          movies={favourites}
        />
        
      </div>
    </div>
  );
}

export default App;
