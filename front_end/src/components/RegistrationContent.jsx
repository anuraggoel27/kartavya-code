import React,{useState} from "react";
import {Form ,Button} from 'react-bootstrap';
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import { setConstantValue } from "typescript";
function RegistrationContent() {
  const [email,setEmail] =useState("");
  const [password,setPassword]=useState("");
  function onEmailChange(event){
    setEmail(event.target.value);
  }
  function onPasswordChange(event){
    setPassword(event.target.value);
  }
  function onSubmit(event) {
    
     axios.post('http://localhost:3001/signup', {
      username: email,
      password: password
    })
    .then(function (response) {
      console.log("Success");
      
    })
    .catch(function (error) {
      console.log("Failure")
      console.log(error);
    });

    event.preventDefault();
  }
    return <div className="registration-body">
    <h1 className="about-heading">Register</h1>
      <Form className="registration-form" action="/signup" method="post">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" onChange={onEmailChange} placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={onPasswordChange} placeholder="Enter"type="password" placeholder="Password" />
        </Form.Group>
        
        <Button onClick={onSubmit} variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
}
export default RegistrationContent;