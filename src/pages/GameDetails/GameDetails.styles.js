import styled, { css } from "styled-components";

export const HeroTitle = styled.h3`
  font-size: 2.5rem;
  margin: 0.5em 0;
`;

export const StyledSection = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(2)};
  `}
`;
