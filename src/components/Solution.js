import React from "react"
import styled from "styled-components"
import { FaDatabase, FaBoxOpen } from "react-icons/fa"

const Solution = ({ category, description, services, products }) => {
  return (
    <SolutionWrapper>
      <div className="categoryContainer">
        <div className="category">
          <h4>{category}</h4>
          <p>{description}</p>
        </div>

        <div className="services">
          <h6>{<FaDatabase />} Services:</h6>
          <p>{services}</p>
        </div>

        <div className="products">
          <h6>{<FaBoxOpen />} Products:</h6>
          <p>{products}</p>
        </div>
      </div>
    </SolutionWrapper>
  )
}

const SolutionWrapper = styled.div`
  width: 80vw;
  margin: 5rem auto;
  display: flex;
  .categoryContainer {
    display: flex;
  }
  .category {
    width: 50%;
    margin-right: 1rem;
    padding-right: 1rem;
  }
  .products,
  .services {
    width: 25%;
    padding: 1.2rem;
    background: linear-gradient(90deg, #f1f1f1, #ededed);
  }
  h4 {
    font-weight: lighter;
    font-size: 2rem;
  }
  p {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
  h6 {
    font-size: 0.8rem;
    font-weight: normal;
  }
  h6 svg {
    font-size: 0.8rem;
    vertical-align: 0px;
  }
  @media (max-width: 900px) {
    .categoryContainer {
      flex-direction: column;
    }
    .category {
      width: 100%;
    }
    .products,
    .services {
      width: 100%;
    }
  }
`

export default Solution
