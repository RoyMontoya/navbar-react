import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './views/Home'
import Bio from './views/Bio'
import Description from './views/Description'
import ContactUs from './views/ContactUs'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/bio" component = {Bio}/>
          <Route path = "/description" component = {Description}/>
          <Route path = "/contact-us" component = {ContactUs}/>
        </div>
      </Router>
    );
  }
}

export default App;
