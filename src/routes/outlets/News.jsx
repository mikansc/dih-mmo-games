import { Outlet } from "react-router";
import DefaultTemplate from "../../templates/DefaultTemplate";

const News = () => {
  return (
    <DefaultTemplate>
      <Outlet />
    </DefaultTemplate>
  );
};

export default News;
