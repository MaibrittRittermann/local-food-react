import React, { Component } from "react";
import { Card } from "react-bootstrap";

class LFCard extends Component {
  state = {
    title: "Title",
    text: "My text",
    img: "prod/sellery.jpg",
  };
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.state.img} />
        <Card.Body>
          <Card.Title>{this.state.title}</Card.Title>
          <Card.Text>{this.state.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default LFCard;
