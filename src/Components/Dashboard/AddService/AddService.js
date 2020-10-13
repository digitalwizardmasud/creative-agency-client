import React from 'react';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import './AddService.css'
import upload from '../../../images/icons/upload.png'
const AddService = () => {
    return (
        <div>
            <Row xs={12}>
                <Col md={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col md={9} >
                    <h4 className='mt-4 ml-5'>Add Service</h4>
                    <Container className='m-5 add-service-form-container'>
                    <Form >
                        <Row xs={12} className='p-4'>
                            <Col md={6}>
                                <Form.Label>Service Title</Form.Label>
                                <Form.Group controlId="formBasicText">
                                <Form.Control type="text" placeholder="Enter title" />
                                
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows="5" placeholder='Enter designation'/>
                                </Form.Group>
                            </Col>
                            <Col md={6} className='mt-3 '>
                                <div className='file-upload' 
                                    style={{background:`url(${upload}) no-repeat`, backgroundSize:'30px 30px'}}>
                                    <input type="file"/>
                                    <p style={{color:'#009444',margin:'0', marginLeft:'5px'}}>Upload image</p>
                                </div>
                                
                            </Col>
                        </Row>
                        </Form>
                    </Container>
                    <Button className='float-right mt-2' style={{background:'#009444'}} type="submit">
                        Submit
                    </Button>
                        
                </Col>
            </Row>
        </div>
    );
};

export default AddService;