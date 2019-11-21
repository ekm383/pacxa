import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const Card = ({ icon, title, description, link, linkText }) => {
  return (
    <CardWrapper>
      <div className="icon">{icon}</div>
      <h6 className="title">{title}</h6>
      <p className="description">{description}</p>
      <AniLink fade className="linkText" to={link}>
        {linkText}
      </AniLink>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  width: 47%;
  padding: 1rem;
  .icon {
    width: 2rem;
    height: 2rem;
    background: linear-gradient(45deg, #21235d, #5dc4b8);
    text-align: center;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  .icon svg {
    font-size: 1.5rem;
    color: var(--mainWhite);
    padding: 0.2rem;
    margin-top: 0.25rem;
  }
  .title {
    font-size: 1rem;
    font-weight: bold;
    color: var(--primaryColor);
  }
  .description {
    font-size: 0.7rem;
    font-weight: light;
    color: var(--mainGray);
    line-height: 1.2rem;
  }
  .linkText {
    font-size: 0.8rem;
    color: var(--primaryColor);
  }
  @media (max-width: 973px) {
    padding: 0rem;
    margin: 2rem auto;
  }
  @media (max-width: 666px) {
    width: 100%;
    margin: 2rem auto;
    text-align: center;
    .icon {
      margin: 0rem auto 1rem auto;
    }
  }
`

export default Card
