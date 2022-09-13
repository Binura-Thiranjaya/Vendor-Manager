import React ,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
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

  const {id}=useParams();
  
  useEffect(() => {
    const getVendor= async() =>{
      if (id) {
        axios.get(`http://localhost:8080/api/get/${id}`).then((res)=>{
          setVendor({...res.data});
          const vendor=res.data;
          document.getElementById('name').value=vendor[0].name;
          document.getElementById('address').value=vendor[0].address;
          document.getElementById('number').value=vendor[0].number;
          document.getElementById('email').value=vendor[0].email;
          document.getElementById('products').value=vendor[0].products;
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
      axios.post('http://localhost:8080/api/insert',data);
      alert('Data inserted');
      document.getElementById("name").value = " ";
      document.getElementById("address").value = " ";
      document.getElementById("number").value = " ";
      document.getElementById("email").value = " ";
      document.getElementById("products").value = " ";
      e.preventDefault();
      window.location.reload(true);
  }
}
  return (
    <MDBContainer>
      <MDBInput className='mb-4' type='text' id='name' className="signIn-Text-Small" label='Name' onChange={(e)=> setName(e.target.value)}/>
      <MDBInput className='mb-4' type='text' id='address' className="signIn-Text-Small" label='Address' onChange={(e)=> setAddress(e.target.value)}/>
      <MDBInput className='mb-4' type='number' id='number' className="signIn-Text-Small" label='Phone Number' onChange={(e)=> setNumber(e.target.value)}/>
      <MDBInput className='mb-4' type='email' id='email' className="signIn-Text-Small" label='Email address' onChange={(e)=> setEmail(e.target.value)}/>
      <MDBInput className='mb-4' type='text' id='products' className="signIn-Text-Small" label='Products' onChange={(e)=> setProducts(e.target.value)}/>
      <MDBBtn type='submit' className='mb-4' onClick={handleSubmit} block>Sign Up</MDBBtn>
    </MDBContainer>
  );
}