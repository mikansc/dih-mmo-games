import React from "react";
import styled, { css } from "styled-components";

export const Pill = ({text}) => {
  return <PillContainer>{text}</PillContainer>;
};

const PillContainer = styled.div`
  ${({theme})=> css`
    border: 1px solid ${theme.color.info.dark};
    border-radius: 1rem;
    padding: ${theme.spacing(0.2)} ${theme.spacing(0.6)};
    font-size: 0.6rem;
    font-weight: 900;
    text-transform: uppercase;
    color: ${theme.color.info.dark};
  `}
`
