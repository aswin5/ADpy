import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = (e)=>{
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  submit(e){
    e.preventDefault();
    console.log('username', this.state.username);
    console.log('password', this.state.password);
  }
  render() {
    return (
      <Form inline onSubmit={this.submit} >
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input   onChange={this.onChange} type="email" name="username" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input   onChange={this.onChange} type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}
