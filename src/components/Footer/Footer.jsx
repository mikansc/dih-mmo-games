import { FooterLink, StyledFooter } from "./Footer.styles";

export const Footer = () => {
  return (
    <StyledFooter>
      Site desenvolvido com 🧠 por{" "}
      <FooterLink variant="link" href="http://github.com/mikansc" target="_blank" rel="noreferrer">
        Michael Nascimento
      </FooterLink>
      .
    </StyledFooter>
  );
};
