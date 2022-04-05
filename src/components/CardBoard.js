import React, { useState } from "react";
import { CardGroup } from "react-bootstrap";
import Card from "./Card";
import Pagination from "./Pagination";

const CardBoard = ({ cards }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const onPaginate = pageNumber => setCurrentPage(pageNumber)
    
    return (   
      <div className="container mt-5">
        <h1>Produkter</h1>
        <CardGroup>
          {currentCards.map((card, key) => 
            <Card {...card} key={key} />
           )}
        </CardGroup>
        <Pagination postsPerPage={cardsPerPage} totalPosts={cards.length} paginate={onPaginate} currentPage={currentPage}/>
      </div>
    );
}
export default CardBoard;
