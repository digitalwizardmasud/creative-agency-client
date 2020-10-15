import React, { useContext } from 'react';
import './LeftNavbar.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import logo from '../../../images/logos/logo.png'
import {Link } from "react-router-dom";
import { UserContext } from '../../../App';

const LeftNavbar = () => {
    const [data]=useContext(UserContext)
    const generalService=['Order', 'Service list', 'Review']
    const adminService=['Service list', 'Add Service', 'Make Admin']
    return (
        <div className='left-navbar'>
            <div className='pt-4 pb-5 pl-2'>
                <Link to='/'>
                    <img style={{width:'120px'}} src={logo} alt=""/>
                </Link>
            </div>
            <div>
                {
                    
                    data.admin && adminService.map((item,index)=>{
                        return(
                        <Link style={{color:`${window.location.pathname=='/dashboard/'+item.toLowerCase().split(' ').join('-')?'#009444':'black'}`}}
                             to={`/dashboard/${item.toLowerCase().split(' ').join('-')}`}>
                            <div className='d-flex ml-3'>
                            {index==0 && <LocalMallOutlinedIcon></LocalMallOutlinedIcon>}
                            {index==1 && <AddOutlinedIcon></AddOutlinedIcon>}
                            {index==2 && <PersonAddOutlinedIcon></PersonAddOutlinedIcon>}
                            
                            <p className='ml-1' style={{fontSize:'16px', fontWeight:'400'}}>{item}</p>
                        </div>
                        </Link>
                        )
                    })
                }
                {
                    !data.admin && generalService.map((item,index)=>{
                        return(
                        <Link style={{color:`${window.location.pathname=='/dashboard/'+item.toLowerCase().split(' ').join('-')?'#009444':'black'}`}}
                             to={`/dashboard/${item.toLowerCase().split(' ').join('-')}`}>
                            <div className='d-flex ml-3'>
                            {index==0 && <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>}
                            {index==1 && <LocalMallOutlinedIcon></LocalMallOutlinedIcon>}
                            {index==2 && <SmsOutlinedIcon></SmsOutlinedIcon>}
                           
                            <p className='ml-1' style={{fontSize:'16px', fontWeight:'400'}}>{item}</p>
                        </div>
                        </Link>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default LeftNavbar;