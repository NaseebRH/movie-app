import React, { Component } from "react";
import Footer from './Footer';

class MovieRow extends Component {

    render() {
      const { movie } = this.props
      const imgURL = 'http://image.tmdb.org/t/p/original'
      const video = `https://themoviedb.org/movie/${movie.id}/videos?api_key=42cb08814f378447df7898407faa7473&language=en-US`
      return (
        <div className="card  mb-3 ml-3" style={{maxWidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={`${imgURL}${movie.poster_path}`} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p>Rated : {movie.vote_average}</p>
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

class Movies extends Component {
    state = { 
        key :"42cb08814f378447df7898407faa7473",
        moviesList : []
     };
     componentDidMount = () => {
         fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.key}&language=en-US&page=1`)
         .then(res => res.json())
         .then(data => {
            //console.log(data)
             this.setState({ moviesList : data.results});
            })
     }


    render() { 
        //  console.log(this.state.moviesList);
         const movies = this.state.moviesList;
        return ( 
        <div>
        <div className="container mt-2">
        <div className="row">
            {movies.map(movie => 
                <MovieRow movie={movie}/>
            )}
            </div>
            </div>
            <Footer/>
            </div>
         )
    }
}
 
export default Movies;
