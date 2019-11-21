import React from "react"
import styled from "styled-components"

const TeamItem = ({ img, name, bio }) => {
  return (
    <PersonWrapper>
      <div>
        <img src={img} alt="profile" />
        <h6 className="name">{name}</h6>
        <p className="bio">{bio}</p>
      </div>
    </PersonWrapper>
  )
}

const PersonWrapper = styled.div`
  width: 33%;
  padding-right: 1rem;
  img {
    width: 150px;
    border-radius: 50%;
  }
  .name {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 1rem auto;
  }
  .bio {
    font-size: 0.8rem;
    line-height: 1.5rem;
    padding: 0.5rem;
    text-align: left;
  }
  @media (max-width: 973px) {
    width: 100%;
    margin: 1rem auto;
  }
`

export default TeamItem
