import React, { Component } from 'react';
import './App.css';
import AvatarEditor from 'react-avatar-editor';
import {Col, Button} from 'react-bootstrap';

var Dropzone = require('react-dropzone');


class App extends Component {

  constructor(props) {
    super(props);    
    this.state = {
      preview: "",
      rotation: 0,
      scale: 1,
      colour: [255, 255, 255, 0],
      position: {x: 0.5, y: 0.5}
    };
  }

  onDrop(acceptedFiles, rejectedFiles) {
      this.setState({
        preview: acceptedFiles[0].preview
      });      
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);
  }  

  onOpenClick() {
    console.log(this.dropzone);
    // this.dropzone.open();
  }

  changePosition(newPos) {    
    this.setState({
      position: newPos
    });
  }

  onRotateClick() {
    let currentRotation = this.state.rotation;    

    var newRotation = currentRotation == 0 ? 45 : 0;

    this.setState({
      rotation: newRotation
    });
  }

  onScaleClick() {
    let currentScale = this.state.scale;

    var newScale = currentScale == 1 ? 0.5 : 1;

    this.setState({
      scale: newScale
    })
  }

    onOpacityClick() {
    let currentOpacity = this.state.colour[3];

    var newOpacity = currentOpacity == 1 ? 0.5 : 1;
    var newColour = this.state.colour;
    newColour[3] = newOpacity;

    this.setState({
      colour: newColour
    })
  }

  onTranslateClick() {
    let currentPosition = this.state.position;

    var newPosition = currentPosition.x == 0.5 && currentPosition.y == 0.5 ? {x: 0, y: 0.5} : {x: 0.5, y: 0.5};

    this.setState({
      position: newPosition
    })
  }

  render() {
    return (
      <div className="App">

        <Col md={4} sm={4} xs={12}>        
          <div className="dropWrapper">
            <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop.bind(this)} disableClick={true} >     
              <AvatarEditor
                image={this.state.preview}
                width={200}
                height={200}
                border={0}
                scale={this.state.scale}
                rotate={this.state.rotation}
                position={this.state.position}
                onPositionChange={this.changePosition.bind(this)}
            />                              
            </Dropzone>                            
          </div>        
        </Col>

        <Col md={3} sm={3} xs={6}>
          <div className="availableActions">
            <h6>Available Actions</h6>            
            {this.state.rotation == 0 && this.state.preview.length > 0 ? <Button bsStyle="primary" onClick={this.onRotateClick.bind(this)}>Rotate</Button> : null}
            {this.state.scale == 1 && this.state.preview.length > 0 ? <Button bsStyle="primary" onClick={this.onScaleClick.bind(this)}>Scale</Button> : null}
            {this.state.colour[3] == 1 && this.state.preview.length > 0 ? <Button bsStyle="primary" onClick={this.onOpacityClick.bind(this)}>Opacity</Button> : null}
            {this.state.position.x == 0.5 && this.state.position.y == 0.5 && this.state.preview.length > 0 ? <Button bsStyle="primary" onClick={this.onTranslateClick.bind(this)}>Translate</Button> : null}
          </div>
        </Col>

        <Col md={2} sm={2} xs={6}>
          <div className="Applied Actions">
            <h6>Applied Actions</h6>
            {this.state.rotation == 45 && this.state.preview.length > 0 ? <Button bsStyle="primary" onClick={this.onRotateClick.bind(this)}>Rotate</Button> : null}
            {this.state.scale == 0.5 && this.state.preview.length > 0 ? <Button bsStyle="primary" onClick={this.onScaleClick.bind(this)}>Scale</Button> : null}
            {this.state.colour[3] == 0.5 && this.state.preview.length > 0 ? <Button bsStyle="primary" onClick={this.onOpacityClick.bind(this)}>Opacity</Button> : null}
            {this.state.position.x == 0 && this.state.position.y == 0.5 && this.state.preview.length > 0 ? <Button bsStyle="primary" onClick={this.onTranslateClick.bind(this)}>Translate</Button> : null}
          </div>
        </Col>        

      </div>
    );
  }
}

export default App;
