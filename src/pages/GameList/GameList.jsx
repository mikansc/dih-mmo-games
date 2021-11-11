import Container from "../../components/Layout/Container";
import { Loading } from "../../components/Loading";
import data from "../../games-data.json";
import { TextInput } from "../../components/TextInput";
import { Divider } from "../../components/Layout/Divider";

import { IoSearchOutline } from "react-icons/io5";
import styled, { css } from "styled-components";
import { Card } from "../../components/Card";
import { useNavigate } from "react-router-dom";

export const GameList = () => {
  const navigate = useNavigate()
  const loading = false;

  if (loading) {
    return <Loading />;
  }

  return (
    <Container paper>
      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <TextInput
          name="search-games"
          label="Search games"
          placeholder="Search game by name..."
          Icon={IoSearchOutline}
        />
      </div>
      <Divider />
      <section>
        <h3>All games ({data.length})</h3>
        <StyledGameCardsGrid>
          {data.map((game)=> (
            <Card item={game} onClick={()=> navigate(`/${game.id}`)} />
          ))}
        </StyledGameCardsGrid>
      </section>
    </Container>
  );
};

const StyledGameCardsGrid = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(1)};
  `}
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
