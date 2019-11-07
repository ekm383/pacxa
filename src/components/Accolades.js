import React from "react"
import styled from "styled-components"

const Accolades = ({ icon, title, subtitle }) => {
  return (
    <AccoladesWrapper>
      <div className="icon">{icon}</div>
      <div className="infoContainer">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </AccoladesWrapper>
  )
}

const AccoladesWrapper = styled.div`
  display: flex;
  padding: 0.3rem 0rem;
  margin: 0.7rem 1rem 0rem 0rem;
  .icon {
    font-size: 3rem;
  }
  .icon > svg {
    vertical-align: top;
  }
  .title,
  .subtitle {
    color: var(--primaryColor);
  }
  .title {
    font-weight: bold;
    font-size: 0.7rem;
  }
  .subtitle {
    font-weight: light;
    font-size: 0.4rem;
  }
`

export default Accolades
