import "./App.scss";
import Menu from "./components/Menu";
import CardBoard from "./components/CardBoard";
import { Container } from "react-bootstrap";

function App() {

  const cards = [
    {
      title: "Selleri",
      cat: "grøntsag",
      img: "prod/sellery.jpg",
      descr: "Økologisk prima kvalitet fra egen mark",
      amount: 500,
      unit: "g",
      price: 15,
    },
    {
      title: "Kartofler",
      cat: "grøntsag",
      img: "prod/kartofler.jpg",
      descr: "Økologisk sava fra egen mark",
      amount: 2,
      unit: "kg",
      price: 15,
    },
    {
      title: "Majs",
      cat: "grøntsag",
      img: "prod/majs.jpg",
      descr: "Sprøde økologiske sukkermajs, høstet samme dag",
      amount: 1,
      unit: "kolbe",
      price: 6,
    },
    {
      title: "Jordbær",
      cat: "frugt og bær",
      img: "prod/strawberry.jpg",
      text: "Økologisk plukket samme morgen",
      amount: 1,
      unit: "bakke",
      price: 25,
    },
    {
      title: "Gulerødder",
      cat: "grøntsag",
      img: "prod/carrots.jpg",
      text: "Økologisk 1kg",
      amount: 1,
      unit: "kg",
      price: 15,
    },
  ];

  return (
    <div className="App">
      <Menu />
      <Container>
        <header className="App-header">
          <h1>Hello and welcome to Local Food</h1>
        </header>
        <CardBoard cards={cards}/>
      </Container>
    </div>
  );
}

export default App;
