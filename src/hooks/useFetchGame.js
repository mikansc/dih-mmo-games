import { useEffect, useState } from "react";
import { HttpGameService } from "../api/endpoints/game";
import { useParams } from "react-router-dom";

export const useFetchGame = () => {
  const { gameId } = useParams()
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        try {
          setLoading(true);
          const game = await HttpGameService.fetchById(gameId);
          setGame(game);
        }catch (e){
          // ...
        } finally {
          setLoading(false);
        }
      }
    )();
  }, [gameId]);

  return { game, loading };
};
