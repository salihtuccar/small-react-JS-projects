import React from "react";

function Pagination({ totalPages, handleClick }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((num, index) => (
        <button key={index} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
