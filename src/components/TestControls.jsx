import React from 'react';

class TestControls extends React.Component {

  constructor(props) {
    super();
    this.state = {
      text: props.text,
      color: props.color,
      items: props.items,
      imageId: props.imageId
    }
  }

  handleTextChange = (event) => {
    this.setState({text: event.target.value});
  }

  handleColorChange = (event) => {
    this.setState({color: event.target.value});
  }

  handleItemsChange = (event) => {
    this.setState({items: event.target.value});
  }

  handlePictureChange = (event) => {
    this.setState({imageId: parseInt(event.target.value)});
  }

  changeCanvases = () => {
    this.props.onChange(this.state);
  }

  render() {
    return (
      <div className="test-controls">
        <div className="test-control">
          Text: <input className="text-change" type="text" value={this.state.text} onChange={this.handleTextChange} />
        </div>
        <div className="test-control">
          Color: <input className="color-change" type="text" value={this.state.color} onChange={this.handleColorChange} />
        </div>
        <div className="test-control">
          # Items on Page: <input className="items-change" type="text" value={this.state.items} onChange={this.handleItemsChange} />
        </div>
        <div className="test-control">
          Picture: 
          <input id="pick1" className="picture-change" type="radio" name="imageId" value={1} checked={this.state.imageId === 1} onChange={this.handlePictureChange} />
          <label htmlFor="pic1">Picture 1</label>
          <input id="pic2" className="picture-change" type="radio" name="imageId" value={2} checked={this.state.imageId === 2} onChange={this.handlePictureChange} />
          <label htmlFor="pic2">Picture 2</label>
        </div>
        <div className="test-control">
          <button className="update-btn" onClick={this.changeCanvases}>Change Canvases</button>
        </div>
      </div>
    )
  }

}

export default TestControls;