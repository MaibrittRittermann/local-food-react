import React, { Component } from "react";
import { CardGroup } from "react-bootstrap";
import LFCard from "./Card";

class CardBoard extends Component {
  state = { cards: [] };
  render() {
    return (
      <CardGroup>
        <LFCard />
        <LFCard />
        <LFCard />
      </CardGroup>
    );
  }
}

export default CardBoard;
