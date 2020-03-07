import React, { Component } from "react";
import {useStrictMode, Stage, Layer, Circle } from "react-konva";
import '../Static/Canvas.css';


export default class Canvas extends Component {
  state = {
    stageScale: 1,
    stageX: 0,
    stageY: 0,
    selectedElement:null,
    selectedInfo:{
      x:0,
      y:0,
      l:0,
      t:1
    },
    infoRest: [
    {
      x:130,
      y:110,
      l:20,
      t:0
    },
    {
      x:230,
      y:230,
      l:5,
      t:0
    },
    ]
  };

  componentDidMount() {
    this.drawFromState();
  }

  showCoord = (e,element) => {
    e.target.setAttr('fill', '#00334b');
    e.target.draw();
    if(this.state.selectedElement){
      this.state.selectedElement.setAttr('fill','red');
      this.state.selectedElement.draw();
    }

    this.setState({
      selectedElement:e.target,
      selectedInfo:element
    });

  }

  drawFromState = () => {
      var res = [];
      this.state.infoRest.forEach(element => {
        var cir = <Circle
          x={element.x}
          y={element.y}
          radius={element.l}
          fill="green"
          shadowBlur={5}
          onClick = {(e)=> this.showCoord(e,element)}
        />

        res.push(cir);
      });
      return res;
  }

  handleWheel = e => {
    e.evt.preventDefault();

    const scaleBy = 1.02;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };

    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    console.log(newScale);
    if(newScale >1 || newScale < 0.5) {
      return;
    }
    this.setState({
      stageScale: newScale,
      stageX:-(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      stageY:-(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    });

  };
  render() {
    return (
      <div id="mainDivCanvas">
        <div>
          {"x: "+ this.state.selectedInfo.x + " - y:"+this.state.selectedInfo.y}
        </div>
      <Stage
        width={this.props.width}
        height={this.props.height}
        onWheel={this.handleWheel}
        scaleX={this.state.stageScale}
        scaleY={this.state.stageScale}
        x={this.state.stageX}
        y={this.state.stageY}
      >
        <Layer>
          {this.drawFromState()}
        </Layer>
      </Stage>
      </div>
    );
  }
}


