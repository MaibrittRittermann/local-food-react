import "./App.scss";
import {Routes, Route} from 'react-router-dom';
import Menu from "./components/Menu";
import Home from "./components/routes/Home";
import Sellers from "./components/routes/Sellers";
import { Container } from "react-bootstrap";
import LoginForm from "./components/routes/LoginForm";

function App() {

  return (
    <div className="App">
      <Menu />
      <Container>
        <header className="App-header">
          <h1>Find din lokale leverandør på Local Food</h1>
        </header>
        <Routes>
          <Route path="/sellers" element={<Sellers/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
