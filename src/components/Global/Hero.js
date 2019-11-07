import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <HeroWrapper>
        <h1 className="hero-title">{title}</h1>
        <div>{children}</div>
      </HeroWrapper>
    </BackgroundImage>
  )
}

export default styled(Hero)`
  width: 80vw;
  position: relative;
  display: flex;
`
const HeroWrapper = styled.div`
  h1 {
    color: var(--mainWhite);
    font-size: 2rem;
    font-weight: lighter;
  }
`
