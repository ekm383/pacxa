import React from "react"
import styled from "styled-components"
import logo1 from "../images/logo/cisco-logo.jpg"
import logo2 from "../images/logo/DELL-logo.jpg"
import logo3 from "../images/logo/DRF-logo.jpg"
import logo4 from "../images/logo/HP-logo.jpg"
import logo5 from "../images/logo/microsoft-logo.jpg"
import logo6 from "../images/logo/oracle-logo.jpg"
import logo7 from "../images/logo/red-hat-logo.jpg"
import logo8 from "../images/logo/service-now-logo.jpg"

const Logos = () => {
  return (
    <LogoWrapper>
      <div className="topLogos">
        <img src={logo1} alt="cisco" />
        <img src={logo2} alt="dell" />
        <img src={logo3} alt="drf" />
        <img src={logo4} alt="hp" />
        <img src={logo5} alt="microsoft" />
        <img src={logo6} alt="oracle" />
        <img src={logo7} alt="red-hat" />
        <img src={logo8} alt="service-now" />
      </div>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem 0rem;
  img {
    width: 100px;
    margin: 0.5rem;
  }
  @media (max-width: 973px) {
    .topLogos {
      margin: 1rem;
    }
  }
  @media (max-width: 666px) {
    .topLogos {
      margin: 1rem 1rem;
      align-items: center;
    }
  }
`

export default Logos
