import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import logo from '../../images/logos/logo.png'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div style={{paddingTop:'20px'}}>
            <Container>
                <Row xs={12} className='justify-content-between'>
                    <Col xs={6}>
                        <img style={{height:'50px'}} src={logo} alt=""/>
                    </Col>
                    <Col xs={6} className='d-flex justify-content-around align-items-center'>
                        <Link className={`${window.location.pathname=='/'?'matched-path':'my-navlink'}`} to='/'><span>Home</span></Link>
                        {
                             ['Our Team', 'Our Portfolio', 'Contact Us'].map(item=>{
                                 const matchedPath=window.location.pathname=='/'+item.toLowerCase().split(' ').join('-')
                                return(
                                    <Link className={`${matchedPath?'matched-path':'my-navlink'}`} to={`/${item.toLowerCase().split(' ').join('-')}`}
                                         >
                                        <span>{item}</span>
                                    </Link>
                                )
                            })
                        }
                        <Button style={{padding:'4px 20px'}} className='btn-dark btn-sm'>Login</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Navbar;