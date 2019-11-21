import React from "react"
import styled from "styled-components"

const Intro = ({ subtitle, title, description }) => {
  return (
    <IntroWrapper>
      <p className="subtitle">{subtitle}</p>
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
    </IntroWrapper>
  )
}

const IntroWrapper = styled.div`
  .subtitle {
    font-size: 0.7rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .title {
    font-size: 1rem;
    font-weight: bold;
  }
  .description {
    font-size: 0.8rem;
    font-weight: light;
    color: var(--mainGray);
    line-height: 1.5rem;
  }
`

export default Intro
