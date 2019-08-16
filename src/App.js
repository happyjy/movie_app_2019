import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //async, await(ES6)는 javaScript에게 getMovies function을 했을때 시간이 걸려 기다려 달라는 의미로 사용한 것 
  getMovie = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  
  componentDidMount(){
    this.getMovies();
    // setTimeout(()=>{
    //   this.setState({ isLoading: false });
    // }, 3000);
  }

  render(){
    const { isLoading } = this.state;
    return <div> { isLoading ? "Loading..." : "We are ready!" } </div>;
  }
}

export default App;
