import { NameContainer } from "./styles"

const Name = ({ autor, prof }) => {
  return (
    <NameContainer>
      {autor}
      <span>{prof}</span>
    </NameContainer>
  )
}

export default Name
