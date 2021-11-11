import styled, { css } from "styled-components";

const Container = ({ children, fullWidth, paper, ...rest }) => {
  return (
    <StyledContainer fullWidth={fullWidth} {...rest} paper={paper}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${({ theme, fullWidth, paper }) => css`
    width: 100%;
    max-width: ${fullWidth ? "100%" : theme.screen.xl};
    padding: ${theme.spacing(1)};
    margin: 0 auto;
    background-color: ${paper ? '#FFF' : "transparent"};
    color: ${paper ? theme.color.primary.dark : "inherit"};
  `}
`;

export default Container;
