import "./App.scss";
import {Routes, Route} from 'react-router-dom';
import Menu from "./components/Menu";
import Home from "./components/routes/Home";
import Farmer from "./components/routes/Farmer";
import { Container } from "react-bootstrap";

function App() {

  return (
    <div className="App">
      <Menu />
      <Container>
        <header className="App-header">
          <h1>Hello and welcome to Local Food</h1>
        </header>
        <Routes>
          <Route path="/farmers" element={<Farmer/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
