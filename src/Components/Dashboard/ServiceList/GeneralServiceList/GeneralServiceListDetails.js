import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './GeneralServiceListDetails.css'
const GeneralServiceListDetails = ({service}) => {
    return (
        
            <Col xs={10} md={5} className='text-left'>
            <Card className='general-service-list-details-card mt-5' style={{ width: '90%',margin:'auto', borderRadius:'10px' }}>
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                        <img style={{width:'74px', marginBottom:'10px'}} src={service.img} alt=""/>
                        {/* <p style={{background:'#FFE3E3', color:'#FF4545', borderRadius:'5px', padding:'5px'}}>
                            {service.status}
                        </p> */}
                        <p style={{background:'#C6FFE0', color:'#009444', borderRadius:'5px', padding:'5px'}}>
                            {service.status}
                        </p>
                    </div>
                    <Card.Title style={{fontSize:'20px', fontWeight:'600', color:'#111430'}}>{service.serviceTitle}</Card.Title>
                        <Card.Text style={{fontSize:'16px', fontWeight:'300'}}>
                        {service.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        
    );
};

export default GeneralServiceListDetails;