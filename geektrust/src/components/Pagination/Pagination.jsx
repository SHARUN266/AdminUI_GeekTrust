import React, { useState } from "react";
import "./Pagination.css";
function Pagination() {
  const pageNumbers = [...Array(10).keys()].map((i) => i + 1);

  return (
    <div className="containerPagi">
      <button>Delete selected</button>
      <div className="paginationCon">
        <button>Previous</button>
        {pageNumbers.map((page) => (
          <button className="page" key={page}>
            {page}
          </button>
        ))}
        <button>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
