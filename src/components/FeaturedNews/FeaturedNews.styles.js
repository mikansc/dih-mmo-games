import styled, { css } from "styled-components";

export const Hero = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const HeroContent = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(0.25)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const HeroHeading = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 3.5rem;
  line-height: 1.5em;
  color: ${({ theme }) => theme.color.primary.text};
  left: -15%;
  width: 115%;
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};

  cursor: default;

  & span {
    ${({ theme }) => css`
      background-color: ${theme.color.primary.dark};
      color: ${({ theme }) => theme.color.primary.text};
      box-shadow: ${theme.shadown};
      padding: ${theme.spacing(0.25)};
      transition: background-color 150ms linear;
    `}
    &:hover {
      ${({ theme }) => css`
        background-color: ${theme.color.primary.main};
      `}
    }
  }
`;

export const HeroSub = styled.p`
  color: ${({ theme }) => theme.color.primary.dark};
`;
