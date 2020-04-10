import React from 'react';
import useImage from 'use-image';
import {Stage, Layer, Text, Image, Rect} from 'react-konva';
import bigImage from '../img/bigimage.jpg';

const WIDTH = 200;
const HEIGHT = 133.5;

const BigImage = () => {
  const [bigImg] = useImage(bigImage);
  const [imgURL] = useImage('https://static.showit.co/1200/Yas2uqNkTBSLjiC2ZMD-PA/66410/three16_photography-678.jpg');
  console.log(bigImg, imgURL);
  return <Image width={WIDTH} height={HEIGHT} image={imgURL} />;
}

const BigImageCanvas = (props) => {
  return (
    <Stage className="big-img-canvas" width={WIDTH} height={HEIGHT}>
      <Layer>
        <BigImage />
      </Layer>
      <Layer>
        <Rect x={20} y={13} width={160} height={107.5} fill={props.color} />
      </Layer>
      <Layer>
        <Text text={props.text || "Wow, what a cool test."} fill="white" x={30} y={23} width={140} height={87.5} />
      </Layer>
    </Stage>
  );
}

class CanvasTest extends React.Component {

  render() {
    return (
      <div className="canvas-test">
        <img src={bigImage} />
        {Array(this.props.testSize).fill(<BigImageCanvas text={this.props.text} color={this.props.color} />)}
      </div>
    )
  }

}

export default CanvasTest;