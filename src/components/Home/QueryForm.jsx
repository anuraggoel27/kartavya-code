import React,{useState} from "react";
import { Carousel, Card, Form, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
function QueryForm(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
  const [course,setCourse]=useState("");

  function onNameChange(event){
    setName(event.target.value);
    
  }
  function onEmailChange(event){
    setEmail(event.target.value);
    
  }
  function onContactChange(event){
    setContact(event.target.value);
   
  }
  function onCourseChange(event){
    setCourse(event.target.value);
  }
  
function onSubmit(event){
  fetch("http://localhost:3001/query",{
    method:"post",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      name:name,
      email:email,
      contact:contact,
      course:course
    })
  });
  
  console.log(name,email,contact,course);
  event.preventDefault();
}
    return (
        <div className="query-form">
          <Form method="post" action="/query">
            <h3>Query Form</h3>
            <Form.Group controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={onNameChange} type="text" placeholder="Enter Name" required/>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={onEmailChange} type="email" placeholder="Enter email" required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control onChange={onContactChange} type="text" placeholder="Number" required/>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridSubject">
              <Form.Label>Interested Course</Form.Label>
              <Form.Control as="select" onChange={onCourseChange} required>
                <option>Choose...</option>
                <option>Class 9th (Foundation)</option>
                <option>Class 10th (Foundation)</option>
                <option>Class 11th (Boards)</option>
                <option>Class 12th (Boards)</option>
                <option>Class 11th (Mains/NEET)</option>
                <option>Class 12th (Mains/NEET)</option>
              </Form.Control>
            </Form.Group>

            <Button onClick={onSubmit} color="primary" type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        </div>
    )
}
export default QueryForm;