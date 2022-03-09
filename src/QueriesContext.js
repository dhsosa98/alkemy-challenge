import React, { createContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const QueriesContext = createContext();

const QueriesProvider = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const [querys, setQuerys] = useState(new URLSearchParams(location.search));
  const page = parseInt(querys?.get("page")) || 0;
  const size = parseInt(querys?.get("size")) || 10;
  const search = querys?.get("search") || "";
  const from = querys?.get("from") || "";
  const to = querys?.get("to") || "";
  const sort = querys?.get("sort") || "";

  useEffect(() => {
    let objQuery = { page, size };
    if (search) {
      objQuery = { ...objQuery, search };
    }
    if (from) {
      objQuery = { ...objQuery, from };
    }
    if (to) {
      objQuery = { ...objQuery, to };
    }
    if (sort) {
      objQuery = { ...objQuery, sort };
    }
    setQuerys(new URLSearchParams(objQuery));
  }, [location, search, from, to, sort, page, size, setQuerys]);

  const setHistorySearchParams = (q) => {
    setQuerys(q);
    history.push("/?" + querys);
  };

  return (
    <QueriesContext.Provider
      value={{
        page,
        size,
        search,
        sort,
        from,
        to,
        querys,
        setQuerys,
        setHistorySearchParams,
      }}
    >
      {children}
    </QueriesContext.Provider>
  );
};

export { QueriesContext, QueriesProvider };
