import React from "react"
import styled from "styled-components"
import Intro from "../Intro"
import Accolades from "../Accolades"
import { IoIosRibbon } from "react-icons/io"
import pic01 from "../../images/pacxa-shake.jpg"

const Awards = () => {
  return (
    <AwardsWrapper>
      <div className="awardsContainer">
        <div className="imageContainer">
          <img src={pic01} alt="shake" />
        </div>
        <div className="introContainer">
          <Intro
            subtitle="ACCOLADES"
            title="We're Proven To Work"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
          <div className="accoladesContiner">
            <Accolades
              icon={<IoIosRibbon />}
              title="Award Winning Services"
              subtitle="24/7/365"
            />
            <Accolades
              icon={<IoIosRibbon />}
              title="Top 250 Companies"
              subtitle="Hawaii Business Magazine"
            />
            <Accolades
              icon={<IoIosRibbon />}
              title="Award Winning Services"
              subtitle="24/7/365"
            />
            <Accolades
              icon={<IoIosRibbon />}
              title="Top 250 Companies"
              subtitle="Hawaii Business Magazine"
            />
          </div>
        </div>
      </div>
    </AwardsWrapper>
  )
}

const AwardsWrapper = styled.div`
  width: 100%;
  background-color: var(--mainLightGray);
  .awardsContainer {
    display: flex;
    width: 100vw;
    padding: 0rem;
    margin: 4rem auto 0rem auto;
  }
  .introContainer {
    width: 50%;
    padding: 3rem;
  }
  .accoladesContiner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 3rem;
  }
  .imageContainer {
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: var(--mainGray);
    & img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 973px) {
    .awardsContainer {
      flex-direction: column;
    }
    .introContainer,
    .imageContainer {
      width: 100%;
    }
  }
`

export default Awards
