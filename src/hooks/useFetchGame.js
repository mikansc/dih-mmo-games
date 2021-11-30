import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HttpGameService } from "../services/endpoints/game";

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
