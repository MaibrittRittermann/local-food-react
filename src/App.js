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

function App() {

  return (
    <div className="App">
      <Menu />
        <header className="App-header">
          <Container>
            <h1 className="py-5 text-light">Find din lokale leverandør på Local Food</h1>
          </Container>
        </header>
      <Container>
        <ToastContainer />
        <Routes>
          <Route path="/product/:id/:product" element={<Product/>}/>
          <Route path="/seller/:id" element={<Seller/>}/>
          <Route path="/sellers" element={<Sellers/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
