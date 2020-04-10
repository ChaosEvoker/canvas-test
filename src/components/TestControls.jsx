import React from 'react';

class TestControls extends React.Component {

  constructor(props) {
    super();
    this.state = {
      text: props.text,
      color: props.color,
      items: props.items
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

  changeText = () => {
    this.props.onChange(this.state);
  }

  render() {
    return (
      <div className="test-controls">
        <div>
          Text: <input className="text-change" type="text" value={this.state.text} onChange={this.handleTextChange} />
        </div>
        <div>
          Color: <input className="color-change" type="text" value={this.state.color} onChange={this.handleColorChange} />
        </div>
        <div>
          # Items on Page: <input className="items-change" type="text" value={this.state.items} onChange={this.handleItemsChange} />
        </div>
        <div>
          <button className="update-btn" onClick={this.changeText}>Update</button>
        </div>
      </div>
    )
  }

}

export default TestControls;