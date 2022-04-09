import React from 'react'



function MoveList({movies,handleFavoritesClick,favoriComponent}) {

  const FavouriteComponent = favoriComponent;
 
  return (
    <div>
        {movies.map((movie,index) => (
            <div key={index} className="image-container d-flex justify-content-start m-3">
                <img src={movie.Poster} alt="movie" />
                <div 
                 onClick = {() =>handleFavoritesClick(movie)}
                 className = 'overlay d-flex align-items-center justify-content-center'

                >

                  <FavouriteComponent/>
                 
                </div>
            </div>
        ))}
    </div>
  )
}

export default MoveList;