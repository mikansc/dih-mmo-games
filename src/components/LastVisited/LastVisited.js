import { useNewsContext } from "../../contexts/news-context";
import styled, { css } from "styled-components";
import { GiBulletBill } from "react-icons/all";

export const LastVisited = () => {
  const { data } = useNewsContext();
  const { visited } = data;
  const { handleOpenNews } = useNewsContext();

  return (
    <>
      <StyledHeader>Últimos visitados:</StyledHeader>
      <StyledNewsList>

        {
          visited.length > 0 ?
            visited.map(news => (
              <li>
                <div onClick={() => handleOpenNews(news)}>
                  <GiBulletBill />{news.title}
                </div>
              </li>
            ))
            : (<li>Você não clicou em nenhuma notícia.</li>)}

      </StyledNewsList>
    </>
  );
};

const StyledHeader = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1em;
`;

const StyledNewsList = styled.ul`
  width: 100%;
  list-style: none;

  & li {
    border-radius: 5px;

    width: 100%;
    margin-bottom: 0.5em;
    padding: 0.25em;
    cursor: pointer;
    background-color: inherit;
    transition: background-color 200ms linear;

    & svg {
      width: 100%;
      max-width: 1.5em;
    }

    :hover {
      ${({ theme }) => css`
        color: ${theme.color.primary.text};
        background-color: ${theme.color.primary.dark};
      `
      }
    }
  }
`;
