import React from "react";
import Container from "../Layout/Container";

import { HeaderContainer } from "./Header.styles";

import LightLogo from "../../assets/img/logo-light.png";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container fullWidth style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/">
          <img src={LightLogo} alt="MMO Games Free to Play - By Mika Nascimento" />
        </Link>
        <nav>
          <Button as={Link} variant="link" to="/news">
            Notícias
          </Button>
          <Button as={Link} variant="link" to="/games">
            Jogos
          </Button>
        </nav>
      </Container>
    </HeaderContainer>
  );
};
