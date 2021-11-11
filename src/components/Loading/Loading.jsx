import styled, { keyframes } from "styled-components";

export const Loading = () => {
  return (
    <LoadingContainer>
      <span />
    </LoadingContainer>
  )
}

const loadingspin = keyframes`
  100% {
    transform: rotate(360deg)
  }
`

const LoadingContainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;

  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & span {
    pointer-events: none;
    width: 6.5em;
    height: 6.5em;
    border: 1em solid #243B55;
    border-top-color: #141E30;
    border-bottom-color: #141E30;
    border-radius: 50%;
    animation: ${loadingspin} 1100ms ease-in-out infinite;
  }
`
