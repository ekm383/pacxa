import React from "react"
import styled from "styled-components"

export const ContactInfo = () => {
  return (
    <InfoWrapper>
      <div>
        <h6>Phone Number:</h6>
        <p>(808) 585-0444</p>
      </div>
      <div>
        <h6>Fax Number:</h6>
        <p>(808) 537-9300</p>
      </div>
      <div>
        <h6>Office Address:</h6>
        <p>
          1000 Bishop Street, Suite 701,
          <br />
          Honolulu, Hawaii 96813
        </p>
      </div>
      <div>
        <h6>Mailing Address:</h6>
        <p>
          P.O. Box 3347,
          <br />
          Honolulu, Hawaii, 96801-3347
        </p>
      </div>
      <div>
        <h6>Marketing Contact:</h6>
        <p>marketing@pacxa.com</p>
      </div>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80vw;
  text-align: center;
  margin: 0rem auto;
  h6 {
    font-weight: bold;
  }
  p {
    font-size: 0.7rem;
  }
`

export default ContactInfo
