import React, { useState } from "react";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, handlePagination }) {
  const [selected, setSelected] = useState(currentPage);
  const pageNumbers = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <div className="containerPagi">
      <button>Delete selected</button>
      <div className="paginationCon">
        <button disabled={currentPage === 1} onClick={() => handlePagination(-1)}>Previous</button>
        {pageNumbers.map((page) => (
          <button
            className={`page ${selected === page ? 'selected' : ''}`}
            key={page}
            onClick={() => setSelected(page)}
          >
            {page}
          </button>
        ))}
        <button disabled={totalPages <= currentPage} onClick={() => handlePagination(1)}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
