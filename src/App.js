import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import React, { useEffect, useState } from 'react';


function App() {

  const Featured_Api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const Img_Api = "https://image.tmdb.org/t/p/w1280";
  const Search_Api = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  



  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(Featured_Api)
  }, []);

  const getMovies = (Api) => {
      fetch(Api)
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      setMovies(data.results);
  })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      getMovies(Search_Api + searchTerm);
      setSearchTerm('')
    }



  };

  const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
  };
  
  return (
    <React.Fragment>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="text" placeholder="Search..." value={searchTerm} onChange={handleOnChange} />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie}/>
          ))}
      </div>
      </React.Fragment> 
  );
}

export default App;
