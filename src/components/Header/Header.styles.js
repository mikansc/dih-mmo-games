import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.size.headerBar};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  align-items: center;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  background: linear-gradient(to top, #243b55, #141e30);
  color: ${({ theme }) => theme.color.defaultText};

  & img {
    width: 140px;
  }

  & nav {
    & a {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.75rem;
      margin-right: ${({ theme }) => theme.spacing(3)};
    }
  }
`;
