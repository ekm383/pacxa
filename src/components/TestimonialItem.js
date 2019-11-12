import React from "react"
import styled from "styled-components"

const TestimonialItem = ({ icon, description, photo, name, title }) => {
  return (
    <ItemWrapper>
      <div className="icon">{icon}</div>
      <div className="description">{description}</div>
      <div className="profileContainer">
        <div className="photo">
          <img src={photo} alt="headshot" />
        </div>
        <div className="personContainer">
          <div className="name">{name}</div>
          <div className="title">{title}</div>
        </div>
      </div>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0.2rem;
  border-radius: 1px;
  .icon {
    font-size: 2rem;
    text-align: center;
    color: var(--mainWhite);
  }
  .description {
    font-size: 0.7rem;
    line-height: 1.2rem;
    text-align: left;
    padding: 0.45rem;
  }
  .profileContainer {
    display: flex;
    padding: 0.45rem;
  }
  .photo {
    margin-right: 0.5rem;
  }
  .photo img {
    width: 2rem;
    border-radius: 50%;
  }
  .name,
  .title {
    font-size: 0.4rem;
  }
  .name {
    font-weight: bold;
  }
  @media (max-width: 666px) {
    width: 100%;
  }
`

export default TestimonialItem
