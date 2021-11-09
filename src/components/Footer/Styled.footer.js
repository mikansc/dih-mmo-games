import styled, { css } from "styled-components";

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

    & a {
      text-decoration: none;
      color: inherit;
      font-weight: 700;
      position: relative;

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: -3px;
        right: 50%;
        left: 50%;
        height: 1px;
        background-color: #fff;
        transition: all 100ms ease-in-out;
      }

      &:hover::before {
        right: 0;
        left: 0;
      }
    }
  `};
`;
