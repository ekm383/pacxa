import React from "react"
import logo from "../../images/pacxa-logo.png"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footerContainer">
        <div className="logo">
          <AniLink fade to="/" className="navbar-brand footer-logo">
            <img src={logo} alt="logo" width="100px" />
          </AniLink>
        </div>
        <div className="footer">
          <h4>About</h4>
          <ul>
            <li>
              <AniLink fade to="/about">
                Our Mission
              </AniLink>
            </li>
            <li>
              <AniLink fade to="/about">
                Team
              </AniLink>
            </li>
            <li>
              <AniLink fade to="/about">
                Jobs
              </AniLink>
            </li>
          </ul>
        </div>
        <div className="footer">
          <h4>Solutions</h4>
          <ul>
            <li>
              <AniLink fade to="/about">
                Microsoft Solutions
              </AniLink>
            </li>
            <li>
              <AniLink fade to="/about">
                Oracle Solutions
              </AniLink>
            </li>
            <li>
              <AniLink fade to="/about">
                Business Solutions
              </AniLink>
            </li>
          </ul>
        </div>
        <div className="footer">
          <h4>Contact</h4>
          <ul>
            <li>
              <AniLink fade to="/about">
                example@domain.com
              </AniLink>
            </li>
          </ul>
        </div>
        <div className="footer">
          <h4>LinkedIn</h4>
          <ul>
            <li>
              <AniLink fade to="/about">
                1 Day Ago
              </AniLink>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div>
          <p>&copy; 2019 Pacxa</p>
        </div>
        <div className="icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #ededed;
  .footerContainer,
  .copyright {
    display: flex;
  }
  .footerContainer {
    justify-content: space-around;
    padding: 4rem 0rem;
  }
  .copyright {
    background-color: var(--mainWhite);
    justify-content: space-between;
    align-items: center;
    color: var(--mainGray);
    font-size: 0.7rem;
    padding: 1rem 5rem;
  }
  .footer-logo {
    margin-right: 0rem;
  }
  .copyright p {
    margin: 0rem;
  }
  .icons svg {
    margin-left: 1rem;
  }
  .footer ul {
    list-style-type: none;
    padding-left: 0rem;
  }
  .footer ul li {
    font-size: 0.5rem;
    margin: 1rem 0rem;
  }
  .footer ul li a {
    color: var(--mainGray);
  }
  .footer h4 {
    font-size: 0.7rem;
    font-weight: bold;
  }
  .snippet {
    width: 20%;
  }
`

export default Footer
