import { useEffect, useState } from "react";
import { HttpNewsService } from "../api/endpoints/news";

export const useFetchNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        try {
          setLoading(true);
          const newsList = await HttpNewsService.fetchAll();
          setNews(newsList);
        } catch (e) {
          // ...
        } finally {
          setLoading(false);
        }
      }
    )();
  }, []);

  return { news, loading };
};
