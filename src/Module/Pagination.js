import React from "react";

export default function Pagination({
  currentPage,
  dataPerPage,
  totalData,
  paginate,
  handleGiamPage,
  handleTangPage,
}) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul>
        <nav aria-label="...">
          <ul class="pagination">
            <li class={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button onClick={handleGiamPage} class="page-link">
                Previous
              </button>
            </li>
            {pageNumber.map((num) => (
              <li
                key={num}
                class={`page-item ${num === currentPage ? "active" : ""}`}
              >
                <button onClick={() => paginate(num)} class="page-link">
                  {num}
                </button>
              </li>
            ))}

            <li
              class={`page-item ${
                currentPage === pageNumber.length ? "disabled" : ""
              }`}
            >
              <button onClick={handleTangPage} class="page-link">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </ul>
    </nav>
  );
}
