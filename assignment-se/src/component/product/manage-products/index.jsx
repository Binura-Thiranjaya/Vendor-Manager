import React ,{useState} from 'react';
import axios from 'axios'
import '../style.css';


export default function App() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState('No Category');
  
  function sendData() {
  
    const data = {
      name: name,
      code: code,
      category: category
    }
    console.log(data.name+" "+data.code+" "+data.category);
    alert("Hi ,Your Name: "+data.name+"the product code :"+data.code+"catergory you looking for:" +data.category);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Product Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Product Code</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Product Code" onChange={(e) => setCode(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Vendor</label>
                  <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setCategory(e.target.value)}>
                    <option>No Vendor</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                    <option>Category 5</option>
                    </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Category</label>
                  <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => setCategory(e.target.value)}>
                    <option>No Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                    <option>Category 5</option>
                    </select>
                </div>
              <button type="button" className="btn btn-primary" onClick={sendData}>Submit</button>
            </form>
          </div>
        </div>  
    </div>
  );
}