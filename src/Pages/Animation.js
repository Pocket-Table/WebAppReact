import React from 'react';
import Canvas from './Canvas';

export default class Animation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { angle: 0 };
      this.updateAnimationState = this.updateAnimationState.bind(this);
    }
  
    componentDidMount() {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  
    updateAnimationState() {
      this.setState(prevState => ({ angle: (prevState.angle + 0.1)%50 }));
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  
    componentWillUnmount() {
      cancelAnimationFrame(this.rAF);
    }
  
    render() {
      return <Canvas angle={this.state.angle} />;
    }
  }
  