import React from 'react';
import {Container, Row, Col, Button, Nav} from 'react-bootstrap'
import logo from '../../images/logos/logo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div style={{paddingTop:'20px'}}>
            <Container>
                <Row xs={12} className='justify-content-between'>
                    <Col xs={6}>
                        <img style={{height:'50px'}} src={logo} alt=""/>
                    </Col>
                    <Col xs={6} className='d-flex justify-content-around align-items-center'>
                        <Link className='text-dark' to='/'><span>Home</span></Link>
                        <Link className='text-dark' to='/'><span>Our Portfolio</span></Link>
                        <Link className='text-dark' to='/'><span>Our Team</span></Link>
                        <Link className='text-dark' to='/'><span>Contact Us</span></Link>
                        <Button style={{padding:'4px 20px'}} className='btn-dark btn-sm'>Login</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Navbar;