import React,{useState} from 'react';
import './style.css';
import {Link} from 'react-router-dom';

import {
  MDBInput,
  MDBBtn,
  MDBContainer,
} from 'mdb-react-ui-kit';
export default function App() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  return (
    <MDBContainer>
      <h1 className="signIn-Heading">Sign In</h1>
    <MDBInput className='mb-4 signIn-Text-Small' type='text' id='email' label='Email address' onChange={(e)=>{setEmail(e.target.value)}} />
      <MDBInput className='mb-4 signIn-Text-Small' type='password' id='password' label='Password' onChange={(e)=>{setPassword(e.target.value)}} />
      <Link to="/dashboard">
        <button>Sign In</button>
      </Link>

      <div className='text-center'>
        <p>
          Not a member? <a href='#!'>Register</a>
        </p>
      </div>
    </MDBContainer>
  );
}