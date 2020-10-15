import React, { useEffect, useState } from 'react';
import {Container, Row} from 'react-bootstrap';
import GeneralServiceListDetails from './GeneralServiceListDetails';
import webIcon from '../../../../images/icons/service2.png'
import { useContext } from 'react';
import {UserContext} from '../../../../App'
import loader from '../../../../images/loader.gif'
const GeneralServiceList = () => {
    const [data]=useContext(UserContext)
  const [allService,setAllService]=useState([])
  useEffect(()=>{
      fetch('http://localhost:3001/show-order-by-mail',{
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              email:data.user?.email
          }
      })
      .then(res=>res.json())
      .then(result=>{
          setAllService(result)
      })
  },[])
    return (
        <div style={{marginTop:'10px', marginBottom:'10px'}}>
            <h4 className='mt-4 ml-5'>Service List</h4>
        <Container>
            <Row xs={12} className='align-items-center' style={{marginTop:'10px'}}>
                {
                        allService.length<1 && 
                        <img src={loader} style={{width:'300px', margin:'auto'}}></img>
                    }
                {
                    allService.map(service=>{
                        return <GeneralServiceListDetails key={service._id} service={service}></GeneralServiceListDetails>
                    })
                }
            </Row>
        </Container>

    </div>
    );
};

export default GeneralServiceList;