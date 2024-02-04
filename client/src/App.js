import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './pages/login';
import Singup from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Singup />} />
        </Routes>
      </Router>
      {/* <Login></Login> */}
      {/* <Singup></Singup> */}
    </div>
  );
}

export default App;
