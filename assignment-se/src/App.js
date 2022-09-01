import './App.css';
import LoginPage from './page/login';
import Dashboard from './page/dashboard';
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
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
