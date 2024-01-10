import styled from "styled-components"
import bg from "./img/pattern-bg.svg"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  position: relative;

  @media (max-width: 900px) {
    padding: 0px;
    margin: 150px 0px 150px 0px;
  }
`

export const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;
  max-width: 990px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const PhotoContainer = styled.div`
  width: 100%;
  height: auto;
  grid-column: 2;
  z-index: -1;

  &::before {
    content: "";
    width: 45%;
    height: 130%;
    top: -40px;
    right: 90px;
    position: absolute;
    background: url(${bg}) no-repeat;
    background-size: 100%;
    z-index: -1;
  }

  @media (max-width: 900px) {
    margin-top: 0px;
    width: 80%;
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    position: relative;

    &::before {
      width: 120%;
      height: 130%;
      top: -50px;
      right: -25px;
    }
  }
`

export const ButtonContainer = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: center;
  margin-top: -30px;
  margin-left: -100px;
  grid-column: -2;

  @media (max-width: 900px) {
    grid-column: 1;
    grid-row: 1;
    margin: 0;
    align-self: flex-end;
    justify-self: center;
  }
`

