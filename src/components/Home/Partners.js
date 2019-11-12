import React from "react"
import styled from "styled-components"
import Intro from "../Intro"
import Logos from "../Logos"

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
      <div className="logoContainer">
        <Logos />
      </div>
    </PartnersWrapper>
  )
}

const PartnersWrapper = styled.div`
  display: flex;
  width: 80vw;
  margin: 4rem auto;
  .introContainer {
    width: 50%;
    margin-right: 1rem;
    padding: 3rem;
  }
  .logoContainer {
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 973px) {
    flex-direction: column;
    .introContainer,
    .logoContainer {
      width: 100%;
    }
  }
  @media (max-width: 666px) {
    .introContainer {
      padding: 0rem;
    }
  }
`

export default Partners
