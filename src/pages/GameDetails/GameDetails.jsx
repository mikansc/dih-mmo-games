import { useState } from "react";

import { useFetchGame } from "../../hooks/useFetchGame";

import { Loading } from "../../components/Loading";
import { Container } from "../../components/Layout/Container";

import { HeroTitle, SlideMediaThumbs, SliderMediaContainer, SliderWrapper, ThumbCard } from "./GameDetails.styles";

export const GameDetails = () => {
  const { game, loading } = useFetchGame();
  const [selected, setSelected] = useState(1);

  if (loading) {
    return <Loading />;
  }

  if (!game) {
    return (
      <Container paper>
        <p>Nenhum jogo encontrado.</p>
      </Container>
    );
  }

  return <Container paper>
    <HeroTitle>{game.title}</HeroTitle>
    <SliderWrapper>
      <SliderMediaContainer>
        <img src={game.screenshots[selected].image} alt={`${game.title} - Screenshot ${selected + 1}`} />
      </SliderMediaContainer>
      <SlideMediaThumbs>
        {game.screenshots.map((thumb, index) => (
          <ThumbCard key={thumb.id} isSelected={index === selected} onClick={() => setSelected(index)}>
            <img src={thumb.image} alt={`${game.title} - Screenshot ${index + 1}`} />
          </ThumbCard>
        ))}
      </SlideMediaThumbs>
    </SliderWrapper>
  </Container>;
};
