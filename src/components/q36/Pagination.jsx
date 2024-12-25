import React, { useState } from "react";

const Pagination = ({ totalPages, currentPage }) => {
  const [onPageChange, setonPageChange] = useState(currentPage);
  const handlePrevious = () => {
    if (currentPage > 1) {
      setonPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setonPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {onPageChange} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
