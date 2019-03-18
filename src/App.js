import React, { Component } from "react";
import "./App.css";
import Modal from 'react-responsive-modal';
import Movies from './components/Movies';
import NavBar from './components/NavBar.js'
import SearchMovie from './components/SearchMovie'
import TV from './components/TV'
import {Route, Switch} from 'react-router-dom'

class App extends Component {


  render() {
    return (
      
      <div className="App">
        <NavBar/>
      <div className="content">
      <Switch>
      <Route path="/TV" component={TV}/>
      <Route path="/SearchMovie" component={SearchMovie}/>
      <Route path="/" component={Movies}/>
      </Switch>
      </div>
        
      </div>
      
    );
  }
}

export default App;
