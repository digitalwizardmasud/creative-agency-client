import React from 'react';
import logo from '../../images/logos/logo.png'
import google from '../../images/icons/google.png'
import './Login.css'
const Login = () => {
    return (
        <div>
            <div className='mt-5' style={{width:'150px', margin:'auto'}}>
                <img  style={{height:'50px'}} src={logo} alt=""/>
            </div>
            <div className='mt-5 login-form-container' >
                <h3 className='text-center' style={{fontSize:'24px', fontWeight:'bold'}}>
                    Login with
                </h3>
                <div className='d-flex google-flex'>
                    <img style={{width:'30px',height:'30px'}} src={google} alt=""/>
                    <p className='ml-5'>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;