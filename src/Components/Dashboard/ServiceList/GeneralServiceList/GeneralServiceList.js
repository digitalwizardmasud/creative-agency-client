import React, { useEffect, useState } from 'react';
import {Container, Row} from 'react-bootstrap';
import GeneralServiceListDetails from './GeneralServiceListDetails';
import webIcon from '../../../../images/icons/service2.png'
import { useContext } from 'react';
import {UserContext} from '../../../../App'
import loader from '../../../../images/loader.gif'
const GeneralServiceList = () => {
    document.title='Creative Agency | Service List'
    const [data]=useContext(UserContext)
  const [allService,setAllService]=useState([])
  useEffect(()=>{
      fetch('https://creative-agency-fullstack.herokuapp.com/show-order-by-mail',{
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
            
            <div className='d-flex justify-content-between'>
                <h4 className='mt-4 ml-5'>Service List</h4>
                <h2 className='mt-4' style={{fontSize:'16px', fontWeight:'500'}}>{data.user?.name || 'User'}</h2>
            </div>
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