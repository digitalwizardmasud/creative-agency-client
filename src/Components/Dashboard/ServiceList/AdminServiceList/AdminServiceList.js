import React from 'react';
import {Container, Row} from 'react-bootstrap';
import AdminServiceListDetails from './AdminServiceListDetails';
import { Table } from 'react-bootstrap';
import './AdminServiceList.css'
const AdminServiceList = () => {
    const allService=[
        {
            status:'pending',
            name:'Sufi Ahamed Hamim',
            email:'sufi@gmail.com',
            serviceTitle:'Graphics',
            projectDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        },
        {
            status:'pending',
            name:'Sufi Ahamed Hamim',
            email:'sufi@gmail.com',
            serviceTitle:'Graphics',
            projectDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        },
        {
            status:'pending',
            name:'Sufi Ahamed Hamim',
            email:'sufi@gmail.com',
            serviceTitle:'Graphics',
            projectDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        }
    ]
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
                                <th style={{width:'25%'}}>Project Details</th>
                                <th style={{width:'10%'}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allService.map(service=>{
                                    return <AdminServiceListDetails service={service}></AdminServiceListDetails>
                                })
                            }
                        </tbody>
                    </Table>
                    
            </Container>
        </div>
    );
};

export default AdminServiceList;