import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceDetails.css'
const ServiceDetails = ({service}) => {
    return (
        <Col xs={12} sm={6} md={4} className='text-center'>
            <Card className='service-details-card mt-5' style={{ width: '18rem',border:'none',margin:'auto' }}>
                <Card.Body>
                    <img style={{width:'74px', marginBottom:'10px'}} src={service.img} alt=""/>
                    <Card.Title style={{fontSize:'20px', fontWeight:'600', color:'#111430'}}>{service.title}</Card.Title>
                        <Card.Text style={{fontSize:'16px', fontWeight:'300'}}>
                        {service.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Col>
    );
};

export default ServiceDetails;