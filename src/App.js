import React, { Component } from 'react';
import TestControls from './components/TestControls';
import CanvasTest from './components/CanvasTest';
import './style.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      text: 'Wow, what a cool test.',
      color: '#0793ca',
      items: 100,
    }
  }

  handleChange = (changes) => {
    this.setState(changes);
  }

  render() {
    return (
      <div className="App">
        <TestControls onChange={this.handleChange} items={parseInt(this.state.items)} text={this.state.text} color={this.state.color}></TestControls>
        <CanvasTest testSize={parseInt(this.state.items)} text={this.state.text} color={this.state.color}></CanvasTest>
      </div>
    );
  }
}

export default App;
