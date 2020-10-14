import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import upload from '../../../images/icons/upload.png'
const Review = () => {
    return (
        <div> 
           <Row xs={12}>
                <Col md={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col md={10} >
                <h4 className='mt-4 ml-5'>Review</h4>
                    <Container className='m-5 order-form-container'>
                    <Form >
                        <Row xs={12} className='p-5'>
                            <Col md={5}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control type="name" placeholder="Your name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicDesignation">
                                    <Form.Control type="designation" placeholder="Company's name, Designation" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows="5" placeholder='Description'/>
                                </Form.Group>
                                <Button className='btn-dark px-3 py-1'>Submit</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Review; 