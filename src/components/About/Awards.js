import React from "react"
import styled from "styled-components"

const Awards = () => {
  return (
    <AwardsWrapper>
      <h4>Awards</h4>
      <p>Hawaii Business Best Places to Work 2014-2019</p>
      <p>Hawaii Business Top 250 Companies 2014, 2015, 2017, 2018</p>
    </AwardsWrapper>
  )
}

const AwardsWrapper = styled.div`
  width: 100vw;
  background-color: var(--mainLightGray);
  text-align: center;
  padding: 4rem;
  margin: 4rem 0rem;
  p {
    margin: 0rem;
  }
`

export default Awards
