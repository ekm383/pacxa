import React from "react"
import styled from "styled-components"
import Intro from "../Intro"

const Partners = () => {
  return (
    <PartnersWrapper>
      <div className="introContainer">
        <Intro
          subtitle="TRUSTED"
          title="Best of Breeds"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
      </div>
      <div className="logoContainer"></div>
    </PartnersWrapper>
  )
}

const PartnersWrapper = styled.div`
  display: flex;
  width: 80vw;
  margin: 4rem auto;
  .introContainer {
    width: 30%;
    margin-right: 1rem;
  }
  .logoContainer {
    width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export default Partners
