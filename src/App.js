import "./App.scss";
import Menu from "./components/Menu";
import CardBoard from "./components/CardBoard";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <header className="App-header">
          <h1>Hello and welcome to Local Food</h1>
        </header>
        <CardBoard />
      </Container>
    </div>
  );
}

export default App;
