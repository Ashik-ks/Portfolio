import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';

function ContactMe() {
  // Form data state to store user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Status message after email submission
  const [status, setStatus] = useState("");

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Service Setup - Replace with your actual service and template IDs
    emailjs
    .send(
      'service_o5m5x8z', // Your service ID
      'template_vq8exu2', // Your template ID
      formData,           // Form data to be passed to the template
      'rgdHULDEYwQVCXarK' // Your user ID
    )
    .then(
      (response) => {
        console.log('Email sent successfully:', response);
        setStatus("Message sent successfully!");
      },
      (error) => {
        console.error('Error sending email:', error);
        setStatus("Oops! Something went wrong. Please try again later.");
      }
    );  
  };

  return (
    <div>
      {/* Contact Form Section */}
      <Container fluid className="contact-section mt-5 pb-5">
        <Row className="justify-content-center">
          <Col md={6} sm={12}>
            <h2 className="text-center mb-2 mt-5 text-white fs-1">Connect with Me</h2>
            <Form onSubmit={handleSubmit}>
              {/* Name Field */}
              <Form.Group controlId="formName" className="mb-5 text-white text-start">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              {/* Email Field */}
              <Form.Group controlId="formEmail" className="mb-5 text-white text-start">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              {/* Subject Field */}
              <Form.Group controlId="formSubject" className="mb-5 text-white text-start">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject"
                  required
                />
              </Form.Group>

              {/* Message Field */}
              <Form.Group controlId="formMessage" className="mb-5 text-white text-start">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  required
                />
              </Form.Group>

              {/* Submit Button */}
              <Button type="submit" variant="primary" className="w-100">
                Send Message
              </Button>
            </Form>

            {/* Status Message */}
            {status && <p className="mt-3 text-center pb-5 text-white">{status}</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactMe;
