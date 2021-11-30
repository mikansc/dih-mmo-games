import * as React from 'react'
import { useEffect, useState } from "react";

export const useSearchFilter = (data) => {
  const [term, setTerm] = useState("");
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  useEffect(() => {
    const filteredList = data.filter(entry => new RegExp(term, "ig").test(entry.title));
    setFiltered(filteredList);
  }, [data, term]);

  const handleSearch = React.useCallback((event) => {
    setTerm(event.target.value);
  },[])

  return {filtered, searchTerm: term, handleSearch}
}
