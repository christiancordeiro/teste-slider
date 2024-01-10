import styled from "styled-components"

export const StyledButton = styled.button`
  width: 50px;
  height: 40px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;

  &.button-next {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: url(${(props) => props.src}) no-repeat center center;
    background-color: white;
  }

  &.button-previous {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: url(${(props) => props.src}) no-repeat center center;
    background-color: white;
  }

  @media (max-width: 900px) {
    height: 48px;

    &.button-next,
    &.button-previous {
      width: 50px;
    }
  }
`
