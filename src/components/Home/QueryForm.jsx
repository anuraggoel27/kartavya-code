import React, { useState } from "react";
import { Carousel, Card, Form, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Fab from "@material-ui/core/Fab";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius:10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 4, 5),
  },
}));
function QueryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [course, setCourse] = useState("");

  function onNameChange(event) {
    setName(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onContactChange(event) {
    setContact(event.target.value);
  }
  function onCourseChange(event) {
    setCourse(event.target.value);
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onSubmit(event) {
    setOpen(true);
    fetch("http://localhost:3001/query", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        contact: contact,
        course: course,
      }),
    });

    console.log(name, email, contact, course);
    event.preventDefault();
  }
  return (
    <div className="query-form">
      <Form method="post" action="/query">
        <h3>Query Form</h3>
        <Form.Group controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={onNameChange}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={onEmailChange}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              onChange={onContactChange}
              type="text"
              placeholder="Number"
              required
            />
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
        <Fab
          onClick={onSubmit}
          variant="extended"
          type="submit"
          className="query-button"
          color="inherit"
        >
        <img src="/images/submit.png" className="button-icon"></img>
          Submit
        </Fab>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Success</h2>
              <p id="transition-modal-description">
                Your Query has been successfully submitted.
              </p>
            </div>
          </Fade>
        </Modal>
      </Form>
    </div>
  );
}
export default QueryForm;
