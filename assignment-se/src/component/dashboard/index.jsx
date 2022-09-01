import React, { useState } from 'react';
import ViewProduct from '../product/view-product/index'; 
import Vendor from '../../page/vendor/index'; 
import Product from '../../page/product/index'; 




import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer
} from 'mdb-react-ui-kit';


export default function App() {
  const [iconsActive, setIconsActive] = useState('tab1');

  const handleIconsClick = (value: string) => {
    if (value === iconsActive) {
      return;
    }
    setIconsActive(value);
  };
  return (
    <MDBContainer>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab1')} active={iconsActive === 'tab1'}>
            <MDBIcon fas icon='chart-pie' className='me-2' /> View Products
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab2')} active={iconsActive === 'tab2'}>
            <MDBIcon fas icon='chart-pie' className='me-2' /> Manage Products
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab3')} active={iconsActive === 'tab3'}>
            <MDBIcon fas icon='chart-pie' className='me-2' /> Manage Users
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={iconsActive === 'tab1'}><ViewProduct/></MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab2'}><Product/></MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab3'}><Vendor/></MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}