import React from 'react';
import { Col, Form, Row,Container, Button } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import upload from '../../../images/icons/upload.png'
import './Order.css'
const Order = () => {
    return (
        <div>
            <Row xs={12}>
                <Col md={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col md={10} >
                <h4 className='mt-4 ml-5'>Order</h4>
                    <Container className='m-5 order-form-container'>
                    <Form >
                        <Row xs={12} className='p-5'>
                            <Col md={5}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Your name / Company's name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Your email address" />
                                </Form.Group>

                                <Form.Group controlId="formBasicTitle">
                                    <Form.Control type="title" placeholder="Service title" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows="5" placeholder='Preject details'/>
                                </Form.Group>

                                <div className='d-flex justify-content-between'>
                                    <Form.Group className='mt-2' controlId="formBasicTitle">
                                        <Form.Control type="title" placeholder="Price" />
                                    </Form.Group>
                                    <div className='file-upload ' 
                                        style={{background:`url(${upload}) no-repeat`, backgroundSize:'30px 30px'}}>
                                        <input type="file"/>
                                        <p style={{color:'#009444',margin:'0', marginLeft:'5px'}}>Upload image</p>
                                    </div>
                                </div>
                                <Button className='btn-dark px-4'>Send</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Order;