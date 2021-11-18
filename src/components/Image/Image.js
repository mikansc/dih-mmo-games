import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

export const Image = (props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Skeleton loaded={loaded}>
      <StyledImg loaded={loaded} {...props} onLoad={() => setLoaded(true)} />
    </Skeleton>
  );
};

const loadingAnm = keyframes`
  100% {
    transform: translateX(100%)
  }
`;

const Skeleton = styled.figure`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.color.primary.dark};
  display: block;


  &::after {
    ${({ loaded }) => {
      if (loaded) return;
      return css`
        content: '';
        position: absolute;
        inset: 0;
        transform: translateX(-100%);
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        animation: ${loadingAnm} 1100ms linear infinite;
      `;
    }}
  }
`;

const StyledImg = styled.img`
  opacity: ${({ loaded }) => loaded ? "1" : "0"};
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
`;
