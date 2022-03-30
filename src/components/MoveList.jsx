import React from 'react'

function MoveList({movies}) {

 
  return (
    <div>
        {movies.map((movie,index) => (
            <div key={index} className="image-container d-flex justify-content-start m3">
                <img src={movie.Poster} alt="" />
            </div>
        ))}
    </div>
  )
}

export default MoveList;