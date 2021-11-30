import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

import { Card } from "../../components/Card";
import { Divider } from "../../components/Layout/Divider";
import { Container } from "../../components/Layout/Container";
import { TextInput } from "../../components/TextInput";

import { usePaginate } from "../../hooks/usePaginate";
import { useFetchGames } from "../../hooks/useFetchGames";
import { Grid } from "../../components/Layout/Grid";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import { Pagination } from "../../components/Pagination/Pagination";

export const GameList = () => {
  const navigate = useNavigate();
  const { games, loading } = useFetchGames();
  const { searchTerm, handleSearch, filtered } = useSearchFilter(games);
  const { data, page, pages, prevPage, nextPage } = usePaginate(filtered);

  const renderCountLabel = () => {
    if (searchTerm.trim().length === 0) {
      return `Todas os jogos (${games.length})`;
    } else {
      if (data.length === 1) {
        return `${filtered.length} resultado para "${searchTerm}"`;
      } else if (data.length > 1) {
        return `${filtered.length} resultados para "${searchTerm}"`;
      }
      return `Nenhum resultado encontrado para "${searchTerm}"`;
    }
  };

  return (
    <Container paper loading={loading}>
      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <TextInput
          name="search-games"
          label="Search games"
          placeholder="Search game by name..."
          Icon={IoSearchOutline}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Divider />
      <section>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{renderCountLabel()}</h3>
          <Pagination
            count={data.length}
            page={page} pages={pages}
            onClickNext={nextPage}
            onClickPrevious={prevPage}
          />
        </div>
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
