import React, { Component } from 'react';


class TvResult extends Component {

    render() { 
      const {show} = this.props;
      const imgURL = `http://image.tmdb.org/t/p/original/${show.poster_path}`;
      const video = `https://themoviedb.org/tv/${show.id}/videos?api_key=42cb08814f378447df7898407faa7473&language=en-US`
       return (  
        <div className="card  mb-3 ml-3" style={{maxWidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={`${imgURL}`} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{show.name}</h5><p>Rated : {show.vote_average}</p>
              <p className="card-text"><small className="text-muted">{show.release_date
  }</small></p>
              <p className="card-text">{show.overview}.</p>
              <a href={`${video}`} target="_blank" className="btn btn-primary">view</a> 
            </div>
          </div>
        </div>
      </div>
   );
    }
  }
   
class TV extends Component {
    state = {
        key: "42cb08814f378447df7898407faa7473",
        // shows: "",
        tvList: []
      };
    
      fetchTv = async event => {
        event.preventDefault();
        const shows = event.target.elements.movie.value;
        const apiCalled = await fetch(
          `
          https://api.themoviedb.org/3/search/tv?api_key=42cb08814f378447df7898407faa7473&language=en-US&query=${shows}&page=1`
        );
        const data = await apiCalled.json();
        if (shows) {
          console.log("this the data", data);
          //edit a new Object
         this.setState({
         tvList : data.results
          });
        } else if ( data === '404') {
          this.setState({ error: "Please enter the movie name" });
        }
        
      };
    render() { 
        const shows = this.state.tvList;
        return ( <div>
            <form onSubmit={this.fetchTv} className="form">
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
            {shows.map(show =>
                <TvResult show={show}/>
            )}
            </div>
           </div>
          
            
        </div> );
    }
}
 
export default TV;