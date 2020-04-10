import React from 'react';
import useImage from 'use-image';
import {Stage, Layer, Text, Image, Rect, Shape} from 'react-konva';
import bigImage from '../img/bigimage.jpg';
import bigImage2 from '../img/bigimage2.jpg';

const WIDTH = 200;
const HEIGHT = 133.5;

const BigImage = () => {
  const [bigImg] = useImage(bigImage);
  return <Image width={WIDTH} height={HEIGHT} image={bigImg} />;
}

const ComplexShape = (props) => {
  return (
    <Shape
      sceneFunc={(context, shape) => {
        context.beginPath();
        context.moveTo(20, 50);
        context.lineTo(220, 80);
        context.quadraticCurveTo(150, 100, 260, 170);
        context.closePath();
        context.fillStrokeShape(shape);
      }}
      fill={props.color}
      stroke={props.color}
      strokeWidth={4}
    />
  )
}

const BigImageCanvas = (props) => {
  const imgUrl = props.imageId === 1 ? bigImage : bigImage2;
  const renderShape = () => {
    if (props.useComplexShape) {
      return (<ComplexShape x={20} y={13} color={props.color} />);
    } else {
      return (<Rect x={20} y={13} width={160} height={107.5} fill={props.color} />);
    }
  };
  return (
    <Stage className="big-img-canvas" width={WIDTH} height={HEIGHT}>
      <Layer>
        <URLImage src={imgUrl} x={0} y={0} />
      </Layer>
      <Layer>
        {renderShape()}
      </Layer>
      <Layer>
        <Text text={props.text || "Wow, what a cool test."} fill="white" x={30} y={23} width={140} height={87.5} />
      </Layer>
    </Stage>
  );
}

class URLImage extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad);
  }
  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener('load', this.handleLoad);
  }
  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      image: this.image
    });
    // if you keep same image object during source updates
    // you will have to update layer manually:
    // this.imageNode.getLayer().batchDraw();
  };
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        width={WIDTH}
        height={HEIGHT}
        image={this.state.image}
        ref={node => {
          this.imageNode = node;
        }}
      />
    );
  }
}

class CanvasTest extends React.Component {

  render() {
    return (
      <div className="canvas-test">
        {Array(this.props.testSize).fill(<BigImageCanvas useComplexShape={this.props.useComplexShape} imageId={this.props.imageId} text={this.props.text} color={this.props.color} />)}
      </div>
    )
  }

}

export default CanvasTest;