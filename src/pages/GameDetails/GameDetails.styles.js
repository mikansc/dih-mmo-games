import styled from "styled-components";

export const HeroTitle = styled.h3`
  font-size: 2.5rem;
  margin: 0.5em 0;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SliderMediaContainer = styled.div`
  width: 100%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 668px;
    object-fit: cover;
    display: block;
  }
`;

export const SlideMediaThumbs = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  border: 0;
  padding: 0.5em;
  width: 240px;
  background-color: rgba(1, 1, 1, 0.8);
`;

export const ThumbCard = styled.div`
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
