import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import { ToastContainer, toast } from 'react-toastify';
const MakeAdmin = () => {
    const [admin, setAdmin]=useState('')
    const addAdminHandler=(e)=>{
        e.preventDefault()
        fetch('http://localhost:3001/add-admin',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({admin})
        })
        .then(res=>res.json())
        .then(result=>{
            result && notify()
        })
    }
    const notify = () => toast("Wow! added a new admin");
    return (
        <div>
            <Row xs={12}>
                <Col md={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col md={9} >
                <h4 className='mt-4 ml-5'>Make Admin</h4>
                    <Container className='m-5 add-service-form-container'>
                    <Form onSubmit={addAdminHandler}>
                        <Row xs={12} className='p-4 align-items-center'>
                            <Col md={5} >
                                <Form.Label>Email</Form.Label>
                                <Form.Group controlId="formBasicText">
                                <Form.Control onBlur={e=>setAdmin(e.target.value)} type="text" placeholder="abc@gmail.com" />
                                
                                </Form.Group>
                            </Col>
                           <Col md={2} >
                           <Button  className='float-left float-left btn-sm' style={{background:'#009444',marginTop:'15px'}} type="submit">
                                    Submit
                            </Button>
                           </Col>
                        </Row>
                        </Form>
                    </Container>
                </Col>
            </Row>
            <ToastContainer bodyClassName='toast-color'/>

        </div>
    );
};

export default MakeAdmin;