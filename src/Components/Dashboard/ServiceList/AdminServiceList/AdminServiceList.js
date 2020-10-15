import React, { useEffect, useState } from 'react';
import {Container, Row} from 'react-bootstrap';
import AdminServiceListDetails from './AdminServiceListDetails';
import { Table } from 'react-bootstrap';
import './AdminServiceList.css'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const AdminServiceList = () => {
    const [allService,setAllService]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/show-orders')
        .then(res=>res.json())
        .then(result=>{
            setAllService(result)
        })
    },[])
    return (
        <div style={{marginTop:'10px', marginBottom:'10px'}}>
            <h4 className='mt-4 ml-5'>Service List</h4>
            <Container className='mt-5 admin-service-list-container'>
                            
                    <Table responsive="xs" className='admin-service-list-table' >
                        <thead className='admin-service-list-table-head'>
                            <tr>
                                <th style={{width:'20%'}}>Name</th>
                                <th style={{width:'20%'}}>Email ID</th>
                                <th style={{width:'20%'}}>Service</th>
                                <th style={{width:'20%'}}>Project Details</th>
                                <th style={{width:'20%'}}>Status</th>
                            </tr>
                            
                        </thead>
                            
                        <tbody>
                           
                            {
                                allService.map(service=>{
                                    return <AdminServiceListDetails key={service._id} service={service}></AdminServiceListDetails>
                                })
                            }
                        </tbody>
                    </Table>
                        {
                                allService.length<1 &&
                                <LinearProgress color='secondary' style={{width:'100%'}}/>
                            }
            </Container>
        </div>
    );
};

export default AdminServiceList;