import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import AdminServiceList from './AdminServiceList/AdminServiceList';
import GeneralServiceList from './GeneralServiceList/GeneralServiceList';

const ServiceList = () => {
    const [data,setData]=useContext(UserContext)

    useEffect(()=>{
        data.user &&  fetch('http://localhost:3001/check-admin',{
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
      },[data])

    return (
        <div>
            <Row xs={12}>
                <Col md={2}>
                    <LeftNavbar></LeftNavbar>
                </Col>
                <Col md={9} >
                    {data.admin && <AdminServiceList></AdminServiceList>}
                    
                    { !data.admin &&<GeneralServiceList></GeneralServiceList>}
                </Col>
            </Row>
        </div>
    );
};

export default ServiceList;