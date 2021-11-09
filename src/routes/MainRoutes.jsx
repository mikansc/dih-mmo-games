import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Games from "./outlets/Games";
import News from "./outlets/News";

import { NewsList } from "../pages/NewsList";
import { GameList } from "../pages/GameList/GameList";
import { GameDetails } from "../pages/GameDetails/GameDetails";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />}>
          <Route index element={<NewsList />} />
        </Route>
        <Route path="/games" element={<Games />}>
          <Route path=":gameId" element={<GameDetails />} />
          <Route index element={<GameList />} />
        </Route>
      </Routes>
    </Router>
  );
};
