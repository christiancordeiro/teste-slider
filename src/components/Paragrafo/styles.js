import styled from "styled-components"
import patternQuotes from "../../img/pattern-quotes.svg"

export const ParagrafoContainer = styled.p`
  font-size: 30px;
  font-weight: 300;
  color: hsl(240, 38%, 20%);
  width: 100%;
  left: 80px;
  position: relative;

  &::before {
    content: "";
    width: 100px;
    height: 100px;
    left: 85px;
    bottom: 170px;
    position: absolute;
    background: url(${patternQuotes}) no-repeat;
    background-size: 100%;
  }

  @media (max-width: 1110px) {
    font-size: 28px;
    left: 100px;
  }

  @media (max-width: 900px) {
    margin-top: 60px;
    left: 0px;
    padding: 20px;

    &::before {
      left: 45%;
      bottom: 70%;
    }
  }
`
