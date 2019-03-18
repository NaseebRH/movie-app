import React, { Component } from "react";



class MovieResult extends Component {

  render() { 
    const {movie} = this.props;
    const imgURL = `http://image.tmdb.org/t/p/original/${movie.poster_path}`;
    const video = `https://themoviedb.org/movie/${movie.id}/videos?api_key=42cb08814f378447df7898407faa7473&language=en-US`
     return (  
      <div className="card  mb-3 ml-3" style={{maxWidth: "540px"}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={`${imgURL}`} className="card-img" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5><p>Rated : {movie.vote_average}</p>
            <p className="card-text"><small className="text-muted">{movie.release_date
}</small></p>
            <p className="card-text">{movie.overview}.</p>
            <a href={`${video}`} target="_blank" className="btn btn-primary">view</a> 
          </div>
        </div>
      </div>
    </div>
 );
  }
}
 
class SearchMovie extends Component {
  state = {
    key: "42cb08814f378447df7898407faa7473",
    // movies: "",
    searchList: []
  };

  fetchMovies = async event => {
    event.preventDefault();
    const movies = event.target.elements.movie.value;
    const apiCalled = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        this.state.key
      }&language=en-US&query=${movies}&page=1&include_adult=false`
    );
    const data = await apiCalled.json();
    if (movies) {
      console.log("this the data", data);
      //edit a new Object
     this.setState({
     searchList : data.results
      });
    } else if ( data === '404') {
      this.setState({ error: "Please enter the movie name" });
    }
    
  };

  render() {
    const movies = this.state.searchList;
    return (
      <div>
        <form onSubmit={this.fetchMovies} className="form">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search Movie"
            name="movie"
          />
          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button> */}
        </form>
       <div className="container mt-4">
  <div className="row">
            {movies.map(movie =>
                <MovieResult movie={movie}/>
            )}
            </div>
           </div>
          
            
      </div>
    );
  }
}

export default SearchMovie;
 