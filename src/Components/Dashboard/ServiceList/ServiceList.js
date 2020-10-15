import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import AdminServiceList from './AdminServiceList/AdminServiceList';
import GeneralServiceList from './GeneralServiceList/GeneralServiceList';

const ServiceList = () => {
    const [data,setData]=useContext(UserContext)
    useEffect(()=>{
        data.user &&  fetch('https://creative-agency-fullstack.herokuapp.com/check-admin',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
            email:data.user?.email
          }
        })
        .then(res=>res.json())
        .then(result=>{
          result && setData({...data,admin:result})
        })
      },[])

    return (
        <div>
            <Row xs={12}>
                <Col md={3} lg={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col md={9} >
                    {data.admin && <AdminServiceList></AdminServiceList>}
                    
                    {!data.admin &&<GeneralServiceList></GeneralServiceList>}
                </Col>
            </Row>
        </div>
    );
};

export default ServiceList;