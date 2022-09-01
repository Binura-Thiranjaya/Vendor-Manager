import React from 'react';
import './style.css';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBContainer>
      <h1 className="signIn-Heading">Sign In</h1>
    <form>
      <MDBInput className='mb-4 signIn-Text-Small' type='email' id='form2Example1' label='Email address' />
      <MDBInput className='mb-4 signIn-Text-Small' type='password' id='form2Example2' label='Password' />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>
      <MDBBtn type='submit' className='mb-4' block>
        Sign in
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='#!'>Register</a>
        </p>
      </div>
    </form>
    </MDBContainer>
  );
}