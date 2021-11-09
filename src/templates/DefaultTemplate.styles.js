import styled, { css } from "styled-components";

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    background-color: ${theme.color.background};
    color: ${theme.color.defaultText};
  `}
`;
