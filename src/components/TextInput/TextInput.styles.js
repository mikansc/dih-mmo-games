import styled from "styled-components";

export const InputGroup = styled.div`
  margin-bottom: ${({theme})=> theme.spacing(1)};
  margin-top: ${({theme})=> theme.spacing(1)};
  display: flex;
  flex-direction: column;
  position: relative;

  
  & label {
    font-weight: 400;
    margin-left: 0.85em;
    margin-bottom: 0.25em;
    font-size: .95rem;
    color: ${({error, theme}) => !!error ? theme.color.error.dark : theme.color.primary.dark};
  }
  
  & input {
    background-color: ${({error, theme}) => !!error ? theme.color.error.light : 'transparent'};
    color: ${({error, theme}) => !!error ? theme.color.error.dark : theme.color.primary.dark};
    border: 1px solid ${({error, theme}) => !!error ? theme.color.error.dark : theme.color.primary.dark};
    border-radius: 5px;
    padding: .85em;
    width: 100%;
  }
  
  & span {
    margin-top: 0.75em;
    color: ${({error, theme}) => !!error ? theme.color.error.dark : theme.color.primary.dark};
    font-size: 1rem;
  }
`
