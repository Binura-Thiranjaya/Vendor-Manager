import React, { Component } from 'react'
import Dashboard from '../../component/dashboard/index'
import ViewAll from '../../component/product/view-product/index'

export default class index extends Component {
  render() {
    return (
        <div>
          <Dashboard/>
          <ViewAll/>
        </div>
       //// <Bs/>
    )
  }
}
