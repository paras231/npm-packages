import { useState } from "react";

//  custom hook for pagination-:

const usePagination = (
  items: [],
  resultPerPage: number,
  middlePagetoShow = 5
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalNumOfPages = Math.ceil(items.length / resultPerPage);
  const startIndex = currentPage * resultPerPage;
  const endIndex = startIndex + resultPerPage;
  const currentItems = items.slice(startIndex, endIndex);
  const startMiddlePage = Math.max(
    currentPage - Math.floor(middlePagetoShow / 2),
    1
  );
  const endMiddlePage = Math.min(
    startMiddlePage + middlePagetoShow - 1,
    totalNumOfPages
  );

  const middlePages: number[] = [];
  for (let i = startMiddlePage; i <= endMiddlePage; i++) {
    middlePages.push(i);
  }

  const changepage = (pn: number) => {
    setCurrentPage(pn);
  };
  const nextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalNumOfPages - 1));
  };
  const prevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 0));
  };

  const jumpToPage = (pageNumber: number) => {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalNumOfPages));
  };

  return {
    currentPage,
    totalNumOfPages,
    changepage,
    currentItems,
    nextPage,
    prevPage,
    middlePages,
    jumpToPage,
  };
};

export { usePagination };
