import styled from "styled-components"

export const NameContainer = styled.h4`
  margin-left: 80px;
  margin-top: -50px;
  color: hsl(240, 38%, 20%);
  font-size: 18px;

  span {
    font-weight: 500;
    color: hsl(240, 18%, 77%);
  }

  @media (max-width: 1110px) {
    margin-top: -50px;
    margin-left: 100px;
  }

  @media (max-width: 900px) {
    margin-left: 0px;
    margin-top: 20px;
    font-size: 20px;
  }
`
