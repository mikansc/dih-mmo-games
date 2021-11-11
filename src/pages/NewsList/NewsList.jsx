import styled, { css } from "styled-components";

import data from "../../news-data.json";

import Container from "../../components/Layout/Container";
import { Divider } from "../../components/Layout/Divider";
import { NewsCard } from "../../components/NewsCard";
import { TextInput } from "../../components/TextInput";
import { FeaturedNews } from "../../components/FeaturedNews";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export const NewsList = () => {
  const [feat, ...allNews] = data;

  return (
    <Container paper>
      <FeaturedNews
        image={feat.main_image}
        title={feat.title}
        description={feat.short_description}
        url={feat.article_url}
      />
      <Divider />
      <div style={{ display: "flex" }}>
        <NewsListSection>
          <h3>All news ({data.length})</h3>
          {allNews.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </NewsListSection>
        <NewsSidebar>
          <span>Search news: </span>
          <ErrorBoundary>
            <TextInput name="search" label="Search" placeholder="Digite o título da notícia"/>
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
