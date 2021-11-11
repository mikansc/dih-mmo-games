import styled, { css } from "styled-components";

export const InputGroup = styled.div`
  ${({ theme, error }) => css`
    margin-bottom: ${theme.spacing(1)};
    margin-top: ${theme.spacing(1)};
    background-color: ${!!error ? theme.color.error.light : "transparent"};
    color: ${!!error ? theme.color.error.dark : theme.color.primary.dark};
    border: 1px solid ${!!error ? theme.color.error.dark : theme.color.primary.dark};
  `}

  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  padding: 0.2em 0.5em 0.8em;


  & label {
    font-weight: 400;
    margin-bottom: 0.25em;
    font-size: .70rem;
    color: ${({ error, theme }) => !!error ? theme.color.error.dark : theme.color.primary.dark};
  }

  & input {
    border: none;
    outline: none;
  }

  & span {
    margin-top: 0.75em;
    color: ${({ error, theme }) => !!error ? theme.color.error.dark : theme.color.primary.dark};
    font-size: 1rem;
  }

  & button {
    ${({theme})=> css`
      padding-right: ${theme.spacing(1)};
      padding-left: ${theme.spacing(1)};
    `}
    
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
  }
`;
