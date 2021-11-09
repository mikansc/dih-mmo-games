import styled, { css } from "styled-components";

const Container = ({ children, fullWidth, ...rest }) => {
  return (
    <StyledContainer fullWidth={fullWidth} {...rest}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  ${({ theme, fullWidth }) => css`
    width: 100%;
    max-width: ${fullWidth ? "100%" : theme.screen.xl};
    padding: ${theme.spacing(1)};
    margin: 0 auto;
  `}
`;

export default Container;
