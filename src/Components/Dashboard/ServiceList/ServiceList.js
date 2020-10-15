import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import AdminServiceList from './AdminServiceList/AdminServiceList';
import GeneralServiceList from './GeneralServiceList/GeneralServiceList';

const ServiceList = () => {
    
    return (
        <div>
            <Row xs={12}>
                <Col md={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col md={9} >
                    <GeneralServiceList></GeneralServiceList>
                    <AdminServiceList></AdminServiceList>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceList;