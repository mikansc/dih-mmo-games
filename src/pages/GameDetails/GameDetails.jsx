import React, { useState } from "react";
import { Container } from "../../components/Layout/Container";
import styled from "styled-components";
import { useFetchGame } from "../../hooks/useFetchGame";
import { Loading } from "../../components/Loading";

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

const HeroTitle = styled.h3`
  font-size: 2.5rem;
  margin: 0.5em 0;
`;

const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SliderMediaContainer = styled.div`
  width: 100%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 668px;
    object-fit: cover;
    display: block;
  }
`;

const SlideMediaThumbs = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  border: 0;
  padding: 0.5em;
  width: 240px;
  background-color: rgba(1, 1, 1, 0.8);
`;

const ThumbCard = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0.5em 0;
  border: 1px solid #FFF;
  cursor: pointer;

  & img {
    display: block;
    max-width: 100%;
    filter: ${({ isSelected }) => isSelected ? "none" : "grayscale(100%)"};
  }
`;
