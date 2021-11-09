import { Outlet } from "react-router";
import DefaultTemplate from "../../templates/DefaultTemplate";

const Games = () => {
  return (
    <DefaultTemplate>
      <h2>Games</h2>
      <Outlet />
    </DefaultTemplate>
  );
};

export default Games;
