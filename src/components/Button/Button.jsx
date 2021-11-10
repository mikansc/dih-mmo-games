import styled from "styled-components";

const BtnVariant = {
  link: "link",
  button: "button",
};

export const Button = ({ variant = "link", ...props }) => {
  switch (variant) {
    case BtnVariant.link:
      return <LinkContainer {...props} />;
    default:
      return <ButtonContainer {...props} />;
  }
};

const ButtonContainer = styled.button`
  // todo
`;

const LinkContainer = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: inherit;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -3px;
    right: 50%;
    left: 50%;
    height: 1px;
    background-color: currentColor;
    transition: all 100ms ease-in-out;
  }

  &:hover::before {
    right: 0;
    left: 0;
  }
`;
