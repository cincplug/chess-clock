import React, { Component } from 'react';
import Timer from './components/Timer';
import SwitchPlayer from './components/SwitchPlayer';
import Timeline from './components/Timeline';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <SwitchPlayer />
        <Timeline />
      </div>
    );
  }
}

export default App;
