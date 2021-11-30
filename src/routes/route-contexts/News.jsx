import { Outlet } from "react-router";
import DefaultTemplate from "../../templates/DefaultTemplate";
import { NewsProvider } from "../../contexts/news-context";

const News = () => {
  return (
    <NewsProvider>
      <DefaultTemplate>
        <Outlet />
      </DefaultTemplate>
    </NewsProvider>
  );
};

export default News;
