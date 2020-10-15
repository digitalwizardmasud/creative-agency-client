import React, { useEffect, useState } from 'react';
import { Container,Row } from 'react-bootstrap';
import FeedbackDetails from './FeedbackDetails';
import man from '../../../images/customer-1.png'
const Feedbacks = () => {
    const [allFeedbacks,setAllFeedbacks]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/show-feedbacks')
        .then(res=>res.json())
        .then(result=>{
            setAllFeedbacks(result)
        })
    },[])
    console.log(allFeedbacks)
    return (
        <div style={{margin:'100px 0'}}>
            <Container>
                <h4 style={{color:'#2d2d2d',fontSize:'34px', fontWeight:'600'}} className='font-weight-bold text-center'>
                    Clients <span className='brand-text'>Feedback</span>
                </h4>

            <Row xs={12} className='align-items-center' style={{marginTop:'60px'}}>
                {
                    allFeedbacks.map(feedback=>{
                        return <FeedbackDetails feedback={feedback}></FeedbackDetails>
                    })
                }
            </Row>
            </Container>
        </div>
    );
};

export default Feedbacks;