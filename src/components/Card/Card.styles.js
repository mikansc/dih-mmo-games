import styled from "styled-components";

export const GameCardArticle = styled.article`
  margin: 1rem 0;
  width: 100%;
  min-height: 340px;
  overflow: hidden;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.gray.main};
  transition: all 100ms linear;

  &:hover {
    transform: translate(3px, -3px);
    box-shadow: ${({ theme }) => theme.shadown};
  }
`;

export const GameCardMedia = styled.div`
  width: 100%;
  min-height: 190px;
  margin-bottom: 0.75rem;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.color.primary.dark};


  & > div {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color: rgba(20, 30, 48, 0.8);
    z-index: 1000;

    opacity: 0;
    transition: opacity 180ms ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.25rem;

    & > h4 {
      font-size: 1.25rem;
      text-transform: uppercase;
      text-align: center;
      color: ${({ theme }) => theme.color.primary.text};
      transform: translateY(100%);
      transition: transform 200ms ease-in-out;
    }
  }

  &:hover > div {
    opacity: 1;

    & > h4 {
      transform: translateY(0);
    }
  }

  //& img {
  //  width: 100%;
  //  display: block;
  //  height: auto;
  //}
`;

export const GameCardContent = styled.span`
  
`
