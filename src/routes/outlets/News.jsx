import { Outlet } from "react-router";
import DefaultTemplate from "../../templates/DefaultTemplate";

const News = () => {
  return (
    <DefaultTemplate>
      <h2>News</h2>
      <Outlet />
    </DefaultTemplate>
  );
};

export default News;
