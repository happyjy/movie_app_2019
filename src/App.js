import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //async, await(ES6)는 javaScript에게 getMovies function을 했을때 시간이 걸려 기다려 달라는 의미로 사용한 것 
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log("### movies : ", movies);
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log("### movies : ", movies);

    this.setState({movies, isLoading: false});

  }
  
  componentDidMount(){
    this.getMovies();
    // setTimeout(()=>{
    //   this.setState({ isLoading: false });
    // }, 3000);
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
        ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
         )}
      </section>
    );
  }
}

export default App;
