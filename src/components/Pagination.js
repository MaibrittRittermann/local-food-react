import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
      pageNumbers.push(i);
    }

  return (
    <nav>
      <ul className='pagination justify-content-center mt-2'>
        {pageNumbers.map(number => (          
          <li key={number} className={number === currentPage ? "page-item active " : "page-item"}>
            <button onClick={() => paginate(number)} className="page-link">{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Pagination;