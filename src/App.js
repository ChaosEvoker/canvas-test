import React, { Component } from 'react';
import TestControls from './components/TestControls';
import CanvasTest from './components/CanvasTest';
import './style.css';
import { parseWithoutProcessing } from 'handlebars';

class App extends Component {

  constructor() {
    super();
    this.state = {
      text: 'Wow, what a cool test.',
      color: '#0793ca',
      items: 100,
      imageId: 1
    }
  }

  handleChange = (changes) => {
    this.setState(changes);
  }

  render() {
    return (
      <div className="App">
        <TestControls imageId={parseInt(this.state.imageId)} onChange={this.handleChange} items={parseInt(this.state.items)} text={this.state.text} color={this.state.color}></TestControls>
        <CanvasTest imageId ={parseInt(this.state.imageId)} testSize={parseInt(this.state.items)} text={this.state.text} color={this.state.color}></CanvasTest>
      </div>
    );
  }
}

export default App;
