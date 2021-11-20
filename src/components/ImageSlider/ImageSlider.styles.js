import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SliderMediaContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 668px;
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
  min-height: 120px;
  overflow: hidden;
  margin: 0.5em 0;
  border: 1px solid #FFF;
  cursor: pointer;
`;
