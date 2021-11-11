import styled, { css } from "styled-components";

export const NewsArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${({ theme }) => css`
    margin-top: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};
    padding: ${theme.spacing(0.25)};
  `}
  transition: all 100ms linear;

  &:hover {
    transform: translate(3px, -3px);
    box-shadow: -3px 3px 5px 2px ${({ theme }) => theme.color.gray.main};
    border-radius: 5px;
  }
`;

export const NewsArticleMedia = styled.div`
  max-width: 210px;
  overflow: hidden;

  ${({ theme }) => css`
    margin-right: ${theme.spacing(1)};
  `}
  & img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const NewsArticleContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ theme }) => css`
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
  `}
`;
