import React, { Component } from 'react'
import Vendor from '../../component/vendor/viewVendors/index';
import Dashboard from '../../component/dashboard/index';
export default class index extends Component {
  render() {
    return (
        <div>
        <div className="">
          <Dashboard/>
        </div>
        <div className="m-5">
          <Vendor />
        </div>
      </div>
    )
  }
}
