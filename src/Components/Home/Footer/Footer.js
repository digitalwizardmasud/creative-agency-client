import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <Container>
                <Row xs={12}>
                    <Col md={6}>
                        <h3  >Let us handle your project professionally</h3>
                        <p style={{fontWeight:'100', fontSize:'14px', color:'rgba(0, 0, 0, 0.7)', marginTop:'20px'}}>
                            With well written codes, we build amazing apps for all platforms, mobile and web apps in general
                        </p>
                    </Col>
                    <Col md={6}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your email address" />
                            
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Your name / Company's name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder='Your message'/>
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <small className='d-block text-center mt-5'>Copyright Orange labs {new Date().getFullYear()}</small>
        </div>
    );
};

export default Footer;