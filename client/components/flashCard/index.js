import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends React.Component {

  constructor(props){
    super(props);

  }

  submit(e){

  }
  render() {
    return (
      <div class="flip">
        <div class="card">
          <div class="face front">
            Front
          </div>
          <div class="face back">
            Back
          </div>
        </div>
      </div>
    );
  }
}
