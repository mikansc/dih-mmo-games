import { useState } from "react";

import { useFetchGame } from "../../hooks/useFetchGame";
import { Container } from "../../components/Layout/Container";

import { HeroTitle, SlideMediaThumbs, SliderMediaContainer, SliderWrapper, ThumbCard } from "./GameDetails.styles";
import { Image } from "../../components/Image/Image";

export const GameDetails = () => {
  const { game, loading } = useFetchGame();
  const [selected, setSelected] = useState(1);

  return <Container paper loading={loading}>
    <HeroTitle>{game && game.title}</HeroTitle>
    <SliderWrapper>
      <SliderMediaContainer>
        {game && <Image src={game.screenshots[selected].image} alt={`${game.title} - Screenshot ${selected + 1}`} />}
      </SliderMediaContainer>
        <SlideMediaThumbs>
          {game && game.screenshots.map((thumb, index) => (
            <ThumbCard key={thumb.id} isSelected={index === selected} onClick={() => setSelected(index)}>
              <Image src={thumb.image} alt={`${game.title} - Screenshot ${index + 1}`} />
            </ThumbCard>
          ))}
        </SlideMediaThumbs>
    </SliderWrapper>
  </Container>;
};
