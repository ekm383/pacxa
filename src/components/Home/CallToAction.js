import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const HeroFeature = () => {
  return (
    <HeroWrapper>
      <h4>More Than IT</h4>
      <p>
        Contact us to learn more about our services and how <br /> we can best
        meet your business needs.
      </p>
      <div>
        <AniLink fade className="button-dark" to="/contact">
          Request A Demo
        </AniLink>
        <AniLink fade className="button-light" to="/contact">
          Request A Demo
        </AniLink>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  color: var(--mainWhite);
  h4 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    font-size: 0.7rem;
    font-weight: lighter;
    line-height: 1.2rem;
  }
  div {
    display: flex;
  }
  .button-light {
    font-size: 0.7rem;
    color: var(--primaryColor);
    background-color: var(--mainWhite);
    padding: 0.8rem 1.2rem;
    border-radius: 1px;
    border: 1px solid var(--mainWhite);
    transition: ease 0.3s;
    &:hover {
      text-decoration: none;
      background: none;
      color: var(--mainWhite);
      border-color: (--mainWhite);
    }
  }
  .button-dark {
    margin-right: 0.5rem;
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
`

export default HeroFeature
