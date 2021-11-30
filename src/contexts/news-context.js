import * as React from "react";
import { useEffect } from "react";
import { useFetchNews } from "../hooks/useFetchNews";

const newsContext = React.createContext();

const NewsContextProvider = newsContext.Provider;

export const useNewsContext = () => {
  const context = React.useContext(newsContext);
  if (!context) {
    throw new Error("useNewsContext precisa ser usado dentro do contexto do NewsContextProvider");
  }

  return context;
};

const initialNewsState = {
  news: [],
  visited: []
};

const newsReducer = (state, action) => {
  console.log(action);
  switch (action.t) {
    case "SET_NEWS":
      return { ...state, news: action.p };
    case "VISIT_NEWS":
      const filtered = state.visited.filter(news => news.id !== action.p.id)
      const selected = filtered.slice(0, 4)
      return { ...state, visited: [action.p, ...selected] };
    default:
      return { ...state };
  }
};

export const NewsProvider = ({ children }) => {
  const { news, loading } = useFetchNews();
  const [state, action] = React.useReducer(newsReducer, initialNewsState);

  useEffect(() => {
    action({ t: "SET_NEWS", p: news });
  }, [action, news]);

  const handleOpenNews = React.useCallback((newsObj) => {
    action({ t: "VISIT_NEWS", p: newsObj });
    window.open(newsObj.article_url, "_blank");
  }, [action]);

  return <NewsContextProvider value={{ data: state, loading, handleOpenNews }}>
    {children}
  </NewsContextProvider>;
};
