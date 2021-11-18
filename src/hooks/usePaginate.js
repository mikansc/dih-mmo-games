import { useEffect, useState } from "react";

export const usePaginate = (initialList = []) => {
  const size = 40;
  const initialPage = 1;

  const [list, setData] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [filtered, setFiltered] = useState(() => filterList(list));

  useEffect(() => {
    setData(initialList);
  }, [initialList]);

  useEffect(() => {
    setFiltered(filterList(list));
    // eslint-disable-next-line
  }, [page, list]);

  const pages = Math.ceil(list.length / size);

  function filterList(listToFilter) {
    return [...listToFilter].slice((page - 1) * size, ((page - 1) * size) + size);
  }

  const nextPage = () => {
    if (page < pages) {
      setPage(p => p + 1);
    }
  };

  const prevPage = () => {
    setPage(p => p > 1 ? p - 1 : p);
  };

  return { data: filtered, nextPage, prevPage, page, pages };
};

