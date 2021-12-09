import React from 'react';
import Review from '../Review';



export default function Movie({title, poster_path, overview, vote_average}) {
    
    const defaultImg = 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

    
    const Img_Api = "https://image.tmdb.org/t/p/w1280";
    const setVoteClass = (vote) => {
        if(vote >= 8){
            return 'green'
        } else if(vote >= 6){
            return 'yellow'
        } else{
            return 'red';
        }
    }

    
    return (
         <div className="movie">
             <Review />
            <img src={poster_path ? (Img_Api + poster_path) : defaultImg } alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-overlay">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}
