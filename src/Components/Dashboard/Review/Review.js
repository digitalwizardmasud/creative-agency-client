import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import upload from '../../../images/icons/upload.png'
import {UserContext} from '../../../App';
const Review = () => {
    const [data]=useContext(UserContext)
    console.log(data)
    const [review,setReview]=useState({})
    const addReviewFormHandler=(e)=>{
        e.preventDefault()
        fetch('http://localhost:3001/add-review',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }
    const inputHandler=(e)=>{
        setReview({...review, [e.target.name]:e.target.value, img:data.user?.img})
    }
    return (
        <div> 
           <Row xs={12}>
                <Col md={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col md={10} >
                <h4 className='mt-4 ml-5'>Review</h4>
                    <Container className='m-5 order-form-container'>
                    <Form onSubmit={addReviewFormHandler}>
                        <Row xs={12} className='p-5'>
                            <Col md={5}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control onBlur={inputHandler} name='name' type="name" placeholder="Your name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicDesignation">
                                    <Form.Control onBlur={inputHandler} name='designationAndCompany' type="designation" placeholder="Designation, Company name - suppose: CEO, Menpol" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control onBlur={inputHandler} name='description' as="textarea" rows="5" placeholder='Description'/>
                                </Form.Group>
                                <Button className='btn-dark px-3 py-1' type='submit'>Submit</Button>
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