import React from "react"
import styled from "styled-components"

const Solution = ({ category, description, services, products }) => {
  return (
    <SolutionWrapper>
      <div className="categoryContainer">
        <h4>{category}</h4>
        <p>{description}</p>
      </div>
      <div className="servicesContainer">
        <h6>Services:</h6>
        <p>{services}</p>
      </div>
      <div className="productContainer">
        <h6>Products:</h6>
        <p>{products}</p>
      </div>
    </SolutionWrapper>
  )
}

const SolutionWrapper = styled.div`
  width: 80vw;
  margin: 5rem auto;
  display: flex;
  .categoryContainer {
    width: 50%;
    margin-right: 3rem;
  }
  .servicesContainer,
  .productContainer {
    width: 25%;
  }
  p {
    font-size: 1rem;
  }
`

export default Solution
