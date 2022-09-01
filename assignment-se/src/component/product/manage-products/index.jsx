import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBContainer,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBContainer>
    <form>
      <MDBRow className='mb-1'>
        <MDBCol>
          <MDBInput id='form3Example1' className="signIn-Text-Small" label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' className="signIn-Text-Small" label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' className="signIn-Text-Small" label='Email address' />
      <MDBInput className='mb-4' type='password' id='form3Example4' className="signIn-Text-Small" label='Password' />

      <MDBBtn type='submit' className='mb-4' block>
        Sign Up
      </MDBBtn>
    </form>
    </MDBContainer>
  );
}