import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Intro from "../Intro"

const HomeFooter = () => {
  return (
    <HomeFooterWrapper>
      <div className="homeFooterContainer">
        <Intro
          subtitle="CONTACT US"
          title="Get Started"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <br />
        <AniLink fade className="button-dark" to="/contact">
          Get Started
        </AniLink>
      </div>
    </HomeFooterWrapper>
  )
}

const HomeFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(45deg, #21235d, #5dc4b8);
  padding: 4rem 0rem;
  .homeFooterContainer {
    width: 45%;
    margin: 0rem auto;
    text-align: center;
    color: var(--mainWhite);
    .description {
      color: var(--mainWhite);
    }
  }
  .button-dark {
    font-size: 0.7rem;
    color: var(--mainWhite);
    background-color: var(--primaryColor);
    padding: 0.8rem 1.2rem;
    border-radius: 1px;
    border: 1px solid var(--primaryColor);
    transition: ease 0.3s;
    &:hover {
      text-decoration: none;
      background: none;
      color: var(--mainWhite);
      border-color: var(--mainWhite);
    }
  }
  @media (max-width: 666px) {
    .homeFooterContainer {
      width: 80%;
    }
  }
`

export default HomeFooter
