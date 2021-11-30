import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import News from "./route-contexts/News";
import Games from "./route-contexts/Games";

import { NewsList } from "../pages/NewsList";
import { GameList } from "../pages/GameList";
import { GameDetails } from "../pages/GameDetails";

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
