import styled, { css } from "styled-components";

export const Divider = () => {
  return <StyledHr />
}

const StyledHr = styled.hr`
  ${({theme})=> css`
    margin-top: ${theme.spacing(2)};
    margin-bottom: ${theme.spacing(1)};
    border-color: ${theme.color.gray.light};
  `}
`
