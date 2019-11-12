import React from "react"
import styled from "styled-components"

export const Overview = () => {
  return (
    <OverviewWraper>
      <div className="overview">
        <h4>Overview</h4>
        <p>
          Pacxa is one of Hawaii’s largest IT firms. We are locally based with
          Hawaii roots and provide services to State of Hawaii government
          agencies, City and County of Honolulu agencies, many of Hawaii’s top
          250 businesses, small and medium-sized businesses, and non-profit
          organizations.  Pacxa is driven to provide best in class solutions,
          tailored to each customer’s unique requirements so they may achieve
          more through technology.  With over 80 employees, our staff have
          delivered leading IT solutions and services to over 300 clients.   
        </p>
        <p>
          Locally-based and Hawaii-rooted, Pacxa is the largest full-service IT
          firm in the state. We are driven to provide best-in-class solutions,
          tailored to each customer’s unique requirements. Our reach extends
          from government agencies and top enterprises, to small businesses and
          non-profits. With close to 90 employees, Pacxa has delivered the
          highest value IT solutions and services to over 300 clients. We’re
          here to help you achieve more through technology. 
        </p>
      </div>
    </OverviewWraper>
  )
}

const OverviewWraper = styled.div`
  width: 80vw;
  margin: 4rem auto 1rem auto;
  display: flex;
  p {
    font-size: 1rem;
  }
`

export default Overview
