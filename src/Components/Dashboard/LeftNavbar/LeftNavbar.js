import React from 'react';
import './LeftNavbar.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import logo from '../../../images/logos/logo.png'
import {Link } from "react-router-dom";

const LeftNavbar = () => {
    
    return (
        <div className='left-navbar'>
            <div className='pt-4 pb-5 pl-2'>
                <Link to='/'>
                    <img style={{height:'50px'}} src={logo} alt=""/>
                </Link>
            </div>
            <div>
                {
                    ['Order', 'Service list', 'Review', 'Add Service', 'Make Admin'].map((item,index)=>{
                        return(
                        <Link style={{color:`${window.location.pathname=='/dashboard/'+item.toLowerCase().split(' ').join('-')?'#009444':'black'}`}}
                             to={`/dashboard/${item.toLowerCase().split(' ').join('-')}`}>
                            <div className='d-flex ml-3'>
                            {index==0 && <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>}
                            {index==1 && <LocalMallOutlinedIcon></LocalMallOutlinedIcon>}
                            {index==2 && <SmsOutlinedIcon></SmsOutlinedIcon>}
                            {index==3 && <AddOutlinedIcon></AddOutlinedIcon>}
                            {index==4 && <PersonAddOutlinedIcon></PersonAddOutlinedIcon>}
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