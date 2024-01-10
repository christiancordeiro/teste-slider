import styled from "styled-components"

export const ImageStyled = styled.img`
  width: 70%;
  grid-column: 1;
  margin-right: 90px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.45) 0 25px 20px -20px;

  @media (max-width: 900px) {
    width: 100%;
    margin-right: 0px;
  }
`
