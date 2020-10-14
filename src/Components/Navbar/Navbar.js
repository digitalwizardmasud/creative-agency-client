import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import logo from '../../images/logos/logo.png'
import {Link} from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
const Navbar = () => {
    const [menu,setMenu]=useState(false)
    console.log(menu)
    return (
        <div style={{paddingTop:'20px'}}>
            <Container>
                <Row xs={12} className='justify-content-between'>
                    <Col xs={6}>
                        <img style={{height:'50px'}} src={logo} alt=""/>
                    </Col>

                    {/* toogler */}
                    <Col xs={1} className='toogler mr-2'>
                        <MenuIcon onClick={()=>setMenu(!menu)}></MenuIcon>
                    </Col>

                    <Col xs={12} lg={6} className={`nav-items ${menu && ' toogled-items' }`}>
                        
                        <Link className={`${window.location.pathname=='/'?'matched-path':'my-navlink'} `} to='/'><span>Home</span></Link>
                        {
                             ['Our Team', 'Our Portfolio', 'Contact Us'].map(item=>{
                                 const matchedPath=window.location.pathname=='/'+item.toLowerCase().split(' ').join('-')
                                return(
                                    <Link className={`${matchedPath?'matched-path':'my-navlink'} mx-2 my-2 `} to={`/${item.toLowerCase().split(' ').join('-')}`}
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