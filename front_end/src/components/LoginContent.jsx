import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";
function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onPasswordChange(event) {
    setPassword(event.target.value);
  }
  function onSubmit(event) {
    axios.post(
      "http://localhost:3001/api/login",
      {
        username: email,
        password: password,
      }
    )
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error)
    })

    event.preventDefault();
  }

  return (
    <div className="login-body">
      <h1 className="about-heading">Login</h1>
      <Form className="login-form" method="post">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={onEmailChange}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={onPasswordChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default LoginContent;
