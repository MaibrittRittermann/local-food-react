import "./App.scss";
import {Routes, Route} from 'react-router-dom';
import Menu from "./components/Menu";
import Home from "./components/routes/Home";
import Sellers from "./components/routes/Sellers";
import { Container } from "react-bootstrap";
import LoginForm from "./components/routes/LoginForm";
import Seller from "./components/routes/Seller";
import Product from "./components/routes/Product";
import { ToastContainer } from 'react-toastify';
import {getCurrentUser} from './services/authService';
import { useState, useEffect } from "react";
import Logout from "./components/routes/Logout";
import Register from "./components/routes/Register";
import Users from "./components/routes/Users";

function App() {

  const [User, setUser] = useState({});

  useEffect (() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <div className="App">
      <Menu user={User}/>
        <header className="App-header">
          <Container>
            <h1 className="py-5 text-light">Find din lokale leverandør på Local Food</h1>
          </Container>
        </header>
      <Container>
        <ToastContainer />
        <Routes>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/seller/:id" element={<Seller/>}/>
          <Route path="/sellers" element={<Sellers/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/register/:id" element={<Register/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
