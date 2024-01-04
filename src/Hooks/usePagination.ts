import { useState } from 'react';

const usePagination = (data:any, itemsPerPage:any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber:any) => {
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentData = data?.slice(firstIndex, lastIndex);

    return {
      currentData,
      totalPages: Math.ceil(data?.length / itemsPerPage),
      currentPage,
      handlePageChange,
    };
  };

  return getPaginatedData();
};

export default usePagination;
