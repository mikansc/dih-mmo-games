import { Outlet } from "react-router";
import DefaultTemplate from "../../templates/DefaultTemplate";

const Games = () => {
  return (
    <DefaultTemplate>
      <Outlet />
    </DefaultTemplate>
  );
};

export default Games;
