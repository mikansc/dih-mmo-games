import styled, { css } from "styled-components";

import { Container } from "../../components/Layout/Container";
import { Divider } from "../../components/Layout/Divider";
import { NewsCard } from "../../components/NewsCard";
import { TextInput } from "../../components/TextInput";
import { FeaturedNews } from "../../components/FeaturedNews";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { IoSearchOutline } from "react-icons/io5";
import { useFetchNews } from "../../hooks/useFetchNews";
import { usePaginate } from "../../hooks/usePaginate";

export const NewsList = () => {
  const { news, loading } = useFetchNews();
  const { data } = usePaginate(news);

  const [feat] = news;

  return (
    <Container paper loading={loading}>
      {feat && (
        <FeaturedNews
          image={feat.main_image}
          title={feat.title}
          description={feat.short_description}
          url={feat.article_url}
        />
      )}
      <Divider />
      <div style={{ display: "flex" }}>
        <NewsListSection>
          <h3>All news ({data.length})</h3>
          {data.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </NewsListSection>
        <NewsSidebar>
          <span>Search news: </span>
          <ErrorBoundary>
            <TextInput name="search" label="Search" placeholder="Digite o título da notícia" Icon={IoSearchOutline} />
          </ErrorBoundary>
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
  width: 420px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    border-left: 3px solid ${theme.color.gray.light};
    margin-left: ${theme.spacing(2)};
    padding-left: ${theme.spacing(1)};
    color: ${theme.color.primary.dark};
  `}
  & > span {
    font-size: 0.85rem;
    font-weight: 700;
    ${({ theme }) => css`
      margin-top: ${theme.spacing(1)};
      color: ${theme.color.primary.dark};
    `}
  }
`;
