'use client';
import React, { memo, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
  fullnum: number;
  postsPerPage: number;
};

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
  fullnum,
  postsPerPage,
}) => {
  // Количество постов на странице регулируется в Home
  const pageCount = Math.ceil(fullnum / postsPerPage); // Используем Math.ceil() для корректного расчета

  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel="⮕"
      onPageChange={(event: any) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={postsPerPage} // количество постов на странице
      pageCount={pageCount} // Передаем рассчитанное pageCount
      forcePage={currentPage - 1}
      previousLabel="⬅"
      marginPagesDisplayed={0}
    />
  );
};

export const Pagination = memo(PaginationComponent);
