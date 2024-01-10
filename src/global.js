import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *, body {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  img {
  max-width: 100%;
  height: auto;
}
`
