import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <h1 className="App-title">A _____ Party Invitation!</h1>
        <p>
          Fill out the form for your event invite!
        </p>
        <form>
          Enter a Random Holiday:
            <input type="text" name="randomHoliday">
              
                Enter a Place:
                  <input type="text" name="place">
              </form>


      </div>
    )
  }
}

export default App;
