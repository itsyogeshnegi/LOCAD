"use client";

import React, { useState , useRef } from "react";
import "./ContactLogo.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ContactLogo = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendData = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!state.name || !state.email || !state.phone || !state.message || !state.subject) {
      toast.error("All fields are required");
      return;
    }

    if (!ValidateEmail(state.email)) {
      toast.error("Invalid email address");
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://plano-v1-api.locad.tech/mailer", state, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Your message has been sent");
      setState({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
      });
      handleClose();
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  function ValidateEmail(email) {
    const testPattern = /^[a-zA-Z0-9._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    return testPattern.test(email);
  }

  return (
    <>
      <div>
        <a className="whats-app">
          <Button
            variant="primary"
            onClick={handleShow}
            style={{ height: "100%", width: "100%", borderRadius: "100%" }}
            aria-label="Contact us">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person-lines-fill"
              viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
            </svg>
          </Button>
        </a>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>
              <span style={{ color: "red" }}>Connect</span> With Us
            </b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form} onSubmit={sendData}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                name="name"
                autoFocus
                required
                value={state.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email@example.com"
                name="email"
                required
                value={state.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                required
                value={state.subject}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                name="phone"
                required
                value={state.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                placeholder="Your Message"
                name="message"
                value={state.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} disabled={loading}>
                Close
              </Button>
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? "Sending..." : "Send Your Message"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ContactLogo;
