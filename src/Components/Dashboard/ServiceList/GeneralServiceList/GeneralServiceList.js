import React from 'react';
import {Container, Row} from 'react-bootstrap';
import GeneralServiceListDetails from './GeneralServiceListDetails';
import webIcon from '../../../../images/icons/service2.png'
const GeneralServiceList = () => {
    const allService=[
        {
            serviceTitle:'Web & Mobile design',
            description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            img:webIcon,
            status:'pending'
        },
        {
            serviceTitle:'Web & Mobile design',
            description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            img:webIcon,
            status:'pending'
        },
        {
            serviceTitle:'Web & Mobile design',
            description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            img:webIcon,
            status:'pending'
        }
    ]
    return (
        <div style={{marginTop:'10px', marginBottom:'10px'}}>
            <h4 className='mt-4 ml-5'>Service List</h4>
        <Container>
            <Row xs={12} className='align-items-center' style={{marginTop:'10px'}}>
                {
                    allService.map(service=>{
                        return <GeneralServiceListDetails service={service}></GeneralServiceListDetails>
                    })
                }
            </Row>
        </Container>

    </div>
    );
};

export default GeneralServiceList;