import styled, { css } from "styled-components";

import { Container } from "../../components/Layout/Container";
import { Divider } from "../../components/Layout/Divider";
import { NewsCard } from "../../components/NewsCard";
import { TextInput } from "../../components/TextInput";
import { FeaturedNews } from "../../components/FeaturedNews";
import { IoSearchOutline } from "react-icons/io5";
import { usePaginate } from "../../hooks/usePaginate";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import { Pagination } from "../../components/Pagination/Pagination";
import { useNewsContext } from "../../contexts/news-context";
import { LastVisited } from "../../components/LastVisited/LastVisited";

export const NewsList = () => {
  const { data: newsData, loading } = useNewsContext();
  const { news } = newsData;

  const { searchTerm, handleSearch, filtered } = useSearchFilter(news);
  const { data, page, pages, nextPage, prevPage } = usePaginate(filtered);

  const renderCountLabel = () => {
    if (searchTerm.trim().length === 0) {
      return `Todas as notícias (${news.length})`;
    } else {
      if (data.length === 1) {
        return `${filtered.length} resultado para "${searchTerm}"`;
      } else if (data.length > 1) {
        return `${filtered.length} resultados para "${searchTerm}"`;
      }
      return `Nenhum resultado encontrado para "${searchTerm}"`;
    }
  };

  const [feat] = news;

  function getNewsList() {
    return <>
      {data.map(item => (
        <NewsCard key={item.id} item={item} />
      ))}
    </>;
  }

  return (
    <Container paper loading={loading}>
      {feat && (
        <FeaturedNews featured={feat} />
      )}
      <Divider />
      <div style={{ display: "flex" }}>
        <NewsListSection>
          <TextInput
            name="search"
            label="Search"
            placeholder="Digite o título da notícia"
            Icon={IoSearchOutline}
            value={searchTerm}
            onChange={handleSearch}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>{renderCountLabel()}</h3>
            <Pagination
              count={data.length}
              page={page} pages={pages}
              onClickNext={nextPage}
              onClickPrevious={prevPage}
            />
          </div>
          {getNewsList()}
        </NewsListSection>
        <NewsSidebar>
          <LastVisited />
        </NewsSidebar>
      </div>
    </Container>
  );
};

const NewsListSection = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(1)};
    color: ${theme.color.primary.dark};
  `}
`;

const NewsSidebar = styled.aside`
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    border-left: 1px solid ${theme.color.gray.main};
    margin-left: ${theme.spacing(2)};
    padding-left: ${theme.spacing(1)};
    color: ${theme.color.primary.dark};
  `}
}
`;
