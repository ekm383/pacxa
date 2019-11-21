import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Intro from "../Intro"
import Card from "../Card"
import { FaDesktop, FaCloud, FaHeadset, FaDatabase } from "react-icons/fa"

const Solutions = () => {
  return (
    <SolutionsWrapper>
      <div className="introContainer">
        <Intro
          subtitle="WE CAN HELP"
          title="Our Solutions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <AniLink fade className="button-dark" to="/contact">
          Request A Demo
        </AniLink>
      </div>
      <div className="cardContainer">
        <Card
          icon={<FaDesktop />}
          title="Desktop and Workspace Infrastructure"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          link="/solutions"
          linkText="Get Started"
        />
        <Card
          icon={<FaCloud />}
          title="Desktop and Workspace Infrastructure"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          link="/solutions"
          linkText="Get Started"
        />
        <Card
          icon={<FaHeadset />}
          title="Desktop and Workspace Infrastructure"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          link="/solutions"
          linkText="Get Started"
        />
        <Card
          icon={<FaDatabase />}
          title="Desktop and Workspace Infrastructure"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          link="/solutions"
          linkText="Get Started"
        />
      </div>
    </SolutionsWrapper>
  )
}

const SolutionsWrapper = styled.div`
  display: flex;
  width: 80vw;
  margin: 4rem auto;
  .introContainer {
    width: 30%;
    margin-right: 1rem;
  }
  .cardContainer {
    width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .button-dark {
    margin-top: 1rem;
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
      color: var(--primaryColor);
      border-color: var(--primaryColor);
    }
  }
  @media (max-width: 973px) {
    flex-wrap: wrap;
    .introContainer,
    .cardContainer {
      width: 100%;
    }
    .cardContainer {
      margin-top: 2rem;
    }
  }
  @media (max-width: 666px) {
    text-align: center;
    .introContainer {
      margin-right: 0rem;
    }
  }
`

export default Solutions
