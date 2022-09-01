import React, { Component } from 'react'
import Reg from './register/index';
import ViewProduct from './viewVendors/index';
import './style.css';

export default class index extends Component {
  render() {
    return (
      <div>
        <h1 className="signIn-Heading">Sign Up</h1>
        <Reg/>
        <h1 className="signIn-subTopic" >All Vendors</h1>
        <ViewProduct/>
      </div>
    )
  }
}
