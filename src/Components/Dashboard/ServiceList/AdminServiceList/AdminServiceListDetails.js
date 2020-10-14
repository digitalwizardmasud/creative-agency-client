import React from 'react';

const AdminServiceListDetails = ({service}) => {
    return (
        
        <tr style={{ fontWeight:'400',}}>
            <td>{service.name}</td>
            <td>{service.email}</td>
            <td>{service.serviceTitle}</td>
            <td>{service.projectDetails}</td>
            <td style={{color:'#FF4545'}}>{service.status}</td>
        </tr>
    );
};

export default AdminServiceListDetails;