import './App.css';
import LoginPage from './page/login';
import Dashboard from './page/dashboard';
import Vendor from './page/vendor';
import Product from './page/product';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />      
        <Route path="/vendor/:id" element={<Vendor />} />
        <Route path="/vendor" element={<Vendor />} />      
        <Route path="/product" element={<Product />} />     
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
