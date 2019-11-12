import React from "react"
import styled from "styled-components"
import Intro from "../Intro"
import TestimonialItem from "../TestimonialItem"
import { FaQuoteLeft } from "react-icons/fa"
import headshot from "../../images/headshot.jpg"

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <div className="testimonialContainer">
        <div className="introContainer">
          <Intro
            subtitle="TESTIMONIALS"
            title="Hear From Our Clients"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
        </div>
        <div className="cardContainer">
          <TestimonialItem
            icon={<FaQuoteLeft />}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            photo={headshot}
            name="Jeff Meyers"
            title="CEO, Company Name"
          />
          <TestimonialItem
            icon={<FaQuoteLeft />}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            photo={headshot}
            name="Jeff Meyers"
            title="CEO, Company Name"
          />
          <TestimonialItem
            icon={<FaQuoteLeft />}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            photo={headshot}
            name="Jeff Meyers"
            title="CEO, Company Name"
          />
        </div>
      </div>
    </TestimonialsWrapper>
  )
}

const TestimonialsWrapper = styled.div`
  width: 100%;
  margin: 4rem auto;
  background: linear-gradient(45deg, #21235d, #5dc4b8);
  color: var(--mainWhite);
  .testimonialContainer {
    display: flex;
    width: 80vw;
    padding: 4rem 0rem;
    margin: 4rem auto;
  }
  .introContainer {
    width: 30%;
    margin-right: 1rem;
  }
  .description {
    color: var(--mainWhite);
  }
  .cardContainer {
    width: 70%;
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 973px) {
    .testimonialContainer {
      flex-wrap: wrap;
    }
    .introContainer,
    .cardContainer {
      width: 100%;
    }
  }
  @media (max-width: 666px) {
    .cardContainer {
      flex-direction: column;
    }
  }
`

export default Testimonials
