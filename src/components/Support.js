import React from "react"
import styled from "styled-components"
import Button from "../components/Global/Button"
import { FaHeadset, FaRegClock } from "react-icons/fa"

const Support = () => {
  return (
    <SupportWrapper>
      <h2>Support</h2>
      <div className="supportContainer">
        <div>
          <h6>{<FaHeadset />} Phone Number:</h6>
          <p>(808) 791-5921</p>
        </div>
        <div>
          <h6>{<FaRegClock />} Business Hours:</h6>
          <p>
            M-F: 8 AM to 5 PM (HST) <br />
            (excluding holidays)
          </p>
        </div>
      </div>
      <div>
        <p>
          24/7 emergency phone support is available. During off hours, the
          operator will take a message and call the after-hours technician on
          duty. You will receive a call from the technician to resolve the
          issue. Please note that charges may be incurred for after-hour
          support.
        </p>
      </div>
      <div className="button">
        <Button styleClass="button-light" text="Client Portal" link="/" />
      </div>
    </SupportWrapper>
  )
}

const SupportWrapper = styled.div`
  color: var(--mainWhite);
  text-align: center;
  width: 60vw;
  margin: 0rem auto;
  padding: 2rem 2rem 4rem 2rem;
  h2 {
    font-weight: lighter;
  }
  p {
    font-size: 0.8rem;
  }
  .supportContainer {
    display: flex;
    justify-content: center;
    div {
      margin: 0rem 2rem;
    }
  }
  .button {
    margin-top: 2rem;
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
`

export default Support
