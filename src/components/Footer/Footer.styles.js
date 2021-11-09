import styled, { css } from "styled-components";

import { Button } from "../Button/Button";

export const StyledFooter = styled.footer`
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;

  position: absolute;
  width: 100%;
  bottom: 0;

  ${({ theme }) => css`
    padding: ${theme.spacing(1)};
    background-color: ${theme.color.primary.main};
    color: ${theme.color.primary.text};
    font-weight: 700;
  `};
`;

export const FooterLink = styled(Button).attrs(() => ({ variant: "link" }))`
  ${({ theme }) => css`
    color: ${theme.color.primary.text};
    font-weight: 700;
    font-size: 0.75rem;
  `};
`;
