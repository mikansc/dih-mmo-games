import { removeTags } from "../../utils/html-utils";
import { useFetchGame } from "../../hooks/useFetchGame";

import { Info } from "../../components/Info/Info";
import { Grid } from "../../components/Layout/Grid";
import { Loading } from "../../components/Loading";
import { Container } from "../../components/Layout/Container";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
import { Requirements } from "../../components/Requirements/Requirements";
import { HeroTitle, StyledSection } from "./GameDetails.styles";

export const GameDetails = () => {
  const { game, loading } = useFetchGame();

  if (!game) {
    return <Loading />;
  }

  return <Container paper loading={loading}>
    <HeroTitle>{game && game.title}</HeroTitle>
    <ImageSlider images={game && game.screenshots} />
    <StyledSection>
      <Grid container>
        <Grid item sm={2}>
          <Info title="Genero" desc={game && game.genre} />
        </Grid>
        <Grid item sm={2}>
          <Info title="Plataforma" desc={game && game.platform} />
        </Grid>
        <Grid item sm={2}>
          <Info title="Desenvolvedor" desc={game && game.developer} />
        </Grid>
        <Grid item sm={2}>
          <Info title="Editora" desc={game && game.publisher} />
        </Grid>
        <Grid item sm={2}>
          <Info title="Lançamento" desc={game && game.release_date} />
        </Grid>
      </Grid>
    </StyledSection>
    <StyledSection>
      <Grid container>
        <h4>Descrição</h4>
        <span>{removeTags(game.description)}</span>
      </Grid>
    </StyledSection>
    <StyledSection>
      <Grid item xs={12} md={8}>
        <Requirements requirement={game && game.minimum_system_requirements} />
      </Grid>
    </StyledSection>
  </Container>;
};




