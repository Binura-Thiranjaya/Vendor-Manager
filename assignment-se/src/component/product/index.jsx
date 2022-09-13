import React, { Component } from 'react'
import Reg from './manage-products/index';
import ViewProduct from './view-product/index';
import Dashboard from '../../component/dashboard/index';

export default class index extends Component {
  render() {
    return (
      <div>
        <Dashboard/>
        <h1 className="signIn-Heading">Manage Products</h1>
        <Reg/>
        <h1 className="signIn-subTopic" >All Products</h1>
        <ViewProduct/>
      </div>
    )
  }
}
