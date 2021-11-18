import { useEffect, useState } from "react";
import { HttpGamesService } from "../api/endpoints/games";

export const useFetchGames = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
        try {
          setLoading(true);
          const games = await HttpGamesService.fetchAll();
          setGames(games);
        } catch (e) {
          // ...
        } finally {
          setLoading(false);
        }
      }
    )();
  }, []);

  return { games, loading };
};
