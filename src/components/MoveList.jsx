import React from 'react'
import AddFavorite from './AddFavorite';

function MoveList({movies,handleFavoritesClick}) {

 
  return (
    <div>
        {movies.map((movie,index) => (
            <div key={index} className="image-container d-flex justify-content-start m-3">
                <img src={movie.Poster} alt="movie" />
                <div 
                 onClick = {() =>handleFavoritesClick(movie)}
                 className = 'overlay d-flex align-items-center justify-content-center'

                >

                  <AddFavorite/>
                 
                </div>
            </div>
        ))}
    </div>
  )
}

export default MoveList;