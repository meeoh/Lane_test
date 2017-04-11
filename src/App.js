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
      colour: [255, 255, 255, 0.6]
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

    var newRotation = currentRotation == 0 ? 45 : 0

    this.setState({
      rotation: newRotation
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
                color={this.state.colour} // RGBA
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
            <Button bsStyle="primary" onClick={this.onRotateClick.bind(this)}>Rotate</Button>
            <Button bsStyle="primary">Translate</Button>
            <Button bsStyle="primary">Opacity</Button>
            <Button bsStyle="primary">Scale</Button>
          </div>
        </Col>

        <Col md={2} sm={2} xs={6}>
          <div className="Applied Actions">
            <h6>Applied Actions</h6>
          </div>
        </Col>        

      </div>
    );
  }
}

export default App;
