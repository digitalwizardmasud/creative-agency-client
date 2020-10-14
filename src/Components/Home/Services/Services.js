import React from 'react';
import {Container, Row} from 'react-bootstrap';
import webIcon from '../../../images/icons/service1.png'
import ServiceDetails from './ServiceDetails';
const Services = () => {

    const allService=[
        {
            title:'Web & Mobile design',
            description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            img:webIcon
        },
        {
            title:'Web & Mobile design',
            description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            img:webIcon
        },
        {
            title:'Web & Mobile design',
            description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            img:webIcon
        }
    ]
    return (
        <div style={{marginTop:'100px', marginBottom:'50px'}}>
            <Container>
                <h4 style={{color:'#2d2d2d', fontSize:'34px', fontWeight:'600'}} className='text-center'>
                    Provide awesome <span className='brand-text'>services</span>
                </h4>
                <Row xs={12} className='align-items-center' style={{marginTop:'60px'}}>
                    {
                        allService.map(service=>{
                            return <ServiceDetails service={service}></ServiceDetails>
                        })
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;