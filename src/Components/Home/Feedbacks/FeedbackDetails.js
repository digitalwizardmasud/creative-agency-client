import React from 'react';
import {Col, Card} from 'react-bootstrap';
import './FeedbackDetails.css'
const FeedbackDetails = ({feedback}) => {
    return (
        <Col xs={12} sm={6} md={4} className='text-center'>
            <Card className='feedback-details-card mt-5' style={{ width: '90%',margin:'auto' }}>
                <Card.Body>
                    <div className='d-flex'>
                        <img style={{width:'64px', height:'64px'}} src={feedback.img} alt=""/>
                        <div className='ml-4 mt-1'>
                            <h5 style={{fontSize:'20px',fontWeight:'600'}}>{feedback.name}</h5>
                            <p style={{fontSize:'16px',fontWeight:'600'}}>{feedback.designationAndCompany}</p>
                        </div>
                    </div> 
                    <div>
                        <p className='mt-2' style={{fontSize:'16px',fontWeight:'400'}}> {feedback.description}</p>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FeedbackDetails;