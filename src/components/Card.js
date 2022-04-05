import React from "react";
import { Card as BSCard, Button } from "react-bootstrap";

const Card = ({ title, cat, img, descr, amount, unit, price }) => {
  return (
    <BSCard>
      <div className="p-2">
        <BSCard.Img variant="top" src={img} />
      </div>
      <BSCard.Body>
        <BSCard.Title>
          {title} - pris: {price},-
        </BSCard.Title>
        <BSCard.Text>{descr}</BSCard.Text>
        <BSCard.Text>{amount} {unit}</BSCard.Text>
        <Button className="btn btn-success">Reserver nu</Button>
      </BSCard.Body>
        <BSCard.Header className="small">{cat}</BSCard.Header>
    </BSCard>
  );
};

export default Card;
