import React ,{useState,useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import axios from 'axios';
import {
  MDBInput,
  MDBBtn,
  MDBContainer,
} from 'mdb-react-ui-kit';

export default function App() {
 
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [products, setProducts] = useState('');
  const [vendor, setVendor] = useState([]);
  const navigate = useNavigate();

  const {id}=useParams();
  
  useEffect(() => {
    const getVendor= async() =>{
      if (id) {
        axios.get(`http://localhost:8080/vendor/${id}`).then((res)=>{
          setVendor({...res.data});
          const vendor=res.data;
          setName(vendor[0].name);
          setAddress(vendor[0].address);
          setNumber(vendor[0].number);
          setEmail(vendor[0].email);
          setProducts(vendor[0].products);
        });
      }
    }
    getVendor();
}, [id]);
  const handleSubmit=(e)=>{
    const data={
      name,
      address,
      number,
      email,
      products
    }
    if (!name || !address || !number || !email || !products) {
      alert('Please fill all the fields');
      e.preventDefault();
      return;
    }else{
      if (!id) {
      axios.post('http://localhost:8080/vendor/add/',data).then(()=>{
      alert('Vendor added successfully', name);
      console.log("FE",name);
      setName('');
      setAddress('');
      setNumber('');
      setEmail('');
      setProducts('');
      //navigate('/vendor');
      //window.location.reload(true);
      }).catch((err)=>{
        console.log(err);
      });
  }else{
    axios.put(`http://localhost:8080/vendor/update/${id}`,data).then(()=>{
    alert('Vendor updated successfully');
    navigate('/vendor');
    window.location.reload(true);
    }
    ).catch((err)=>{
      console.log(err);
    });
    }
  }
  }
  return (
    <MDBContainer>
      <form onSubmit={handleSubmit}>
      <MDBInput className='mb-4' type='text' id='name' className="signIn-Text-Small" label='Name' onChange={(e)=> setName(e.target.value)} value={name || ""}/>
      <MDBInput className='mb-4' type='text' id='address' className="signIn-Text-Small" label='Address' onChange={(e)=> setAddress(e.target.value)} value={address || ""}/>
      <MDBInput className='mb-4' type='number' id='number' className="signIn-Text-Small" label='Phone Number' onChange={(e)=> setNumber(e.target.value)} value={number || ""}/>
      <MDBInput className='mb-4' type='email' id='email' className="signIn-Text-Small" label='Email address' onChange={(e)=> setEmail(e.target.value)} value={email || ""} />
      <MDBInput className='mb-4' type='text' id='products' className="signIn-Text-Small" label='Products' onChange={(e)=> setProducts(e.target.value)} value={products || ""}/>
      <input type='submit' className='btn btn-secondary mb-5'  value={id? "Update" : "Save"}></input>
      </form>
    </MDBContainer>
  );
}