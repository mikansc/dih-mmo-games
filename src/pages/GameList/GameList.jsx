import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

import { Card } from "../../components/Card";
import { Divider } from "../../components/Layout/Divider";
import { Container } from "../../components/Layout/Container";
import { TextInput } from "../../components/TextInput";

import { usePaginate } from "../../hooks/usePaginate";
import { useFetchGames } from "../../hooks/useFetchGames";
import { Grid } from "../../components/Layout/Grid";

export const GameList = () => {
  const navigate = useNavigate();

  const { games, loading } = useFetchGames();
  const { data, page, pages, prevPage, nextPage } = usePaginate(games);

  return (
    <Container paper loading={loading}>
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
        <h3>All games (showing {data.length} of {games.length}) - page {page} of {pages}</h3>
        <button type="button" onClick={nextPage}>Next</button>
        <button type="button" onClick={prevPage}>Prev</button>
        <Grid container>
          {data.map((game) => (
            <Grid key={game.id} item sm={6} md={4} lg={3}>
              <Card item={game} onClick={() => navigate(String(game.id))} />
            </Grid>
          ))}
        </Grid>
      </section>
    </Container>
  );
};
