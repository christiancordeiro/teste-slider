import Paragrafo from "./components/Paragrafo"
import { ImageStyled } from "./components/Photo/styles"
import Name from "./components/Names"
import img1 from "./img/image-tanya.jpg"
import img2 from "./img/image-john.jpg"
import bgNext from "./img/icon-next.svg"
import bgPrev from "./img/icon-prev.svg"
import { StyledButton } from "./components/Button/styles"

import { Container, PhotoContainer, Profile, ButtonContainer } from "./styles"
import { useState } from "react"

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const user = [
    {
      img: img1,
      feedback: `"I've been interested in coding for a while but never taken the jump until now. I couldn't recommend this course enough. I'm nowin the job of my dreams and so excited about the future"`,
      autor: "Tanya Sinclair - ",
      prof: "UX Engineer",
    },
    {
      img: img2,
      feedback: `"If you want to lay best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer"`,
      autor: "John Tarkpor - ",
      prof: "Junior Front-end Developer",
    },
  ]

  const handleClick = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % user.length)
    } else if (direction === "previous") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? user.length - 1 : prevIndex - 1
      )
    }
  }

  return (
    <Container>
      <Profile>
        <Paragrafo feedback={user[currentIndex].feedback} />
        <PhotoContainer>
          <ImageStyled src={user[currentIndex].img} />
        </PhotoContainer>
        <ButtonContainer>
          <StyledButton
            className="button-previous"
            src={bgPrev}
            onClick={() => handleClick("previous")}
          />
          <StyledButton
            className="button-next"
            src={bgNext}
            onClick={() => handleClick("next")}
          />
        </ButtonContainer>
        <Name autor={user[currentIndex].autor} prof={user[currentIndex].prof} />
      </Profile>
    </Container>
  )
}

export default App
