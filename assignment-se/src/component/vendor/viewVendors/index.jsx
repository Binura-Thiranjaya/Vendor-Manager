import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBContainer, MDBBtn} from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
export default function App() {
  const [first, setFirst] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const loadData=async()=>{
    const result=await axios.get('http://localhost:8080/vendor/');
    setData(result.data);
  }
  useEffect(() => {
    loadData();
  }, []);
  const  deleteData = async(id)=>{
     await axios.delete(`http://localhost:8080/vendor/delete/${id}`);
     alert('Vendor deleted successfully');
     window.location.reload(true);
     loadData();
  }
  return (
    <MDBContainer>
    <div>
      <div className="input-group mb-4">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e)=> setFirst(e.target.value)} />
      </div>
    <MDBTable bordered>
      <MDBTableHead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Address</th>
          <th scope='col'>Number</th>
          <th scope='col'>Email</th>
          <th scope='col'>Reg Date</th>
          <th scope='col'>Products</th>
          <th scope='col'>Update</th>
          <th scope='col'>Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.number}</td>
            <td>{item.email}</td>
            <td>{item.date}</td>
            <td>{item.products}</td>
            <td> <Link to={`/vendor/${item.id}`}><MDBBtn color="warning" className="p-1"> Update </MDBBtn></Link></td>
            <td><MDBBtn color='danger' className="p-1" onClick={()=> deleteData(item.id)}>Delete</MDBBtn></td>          
          </tr>
        ))}         
      </MDBTableBody>
    </MDBTable>
    </div>
    </MDBContainer>

  );
}