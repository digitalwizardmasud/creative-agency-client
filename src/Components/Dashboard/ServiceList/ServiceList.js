import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LeftNavbar from '../LeftNavbar/LeftNavbar';

const ServiceList = () => {
    return (
        <div>
            <Row xs={12}>
                <Col md={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col md={10} >
                    <h1>hello</h1>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceList;