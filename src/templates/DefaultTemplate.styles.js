import styled, { css } from "styled-components";

export const StyledContent = styled.main`
  width: 100%;
  ${({ theme }) => css`
    padding-top: ${theme.size.headerBar};
    padding-bottom: ${theme.spacing(3)};
    color: ${theme.color.defaultText};
  `}
`;
