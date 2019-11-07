import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../../images/pacxa-logo.png"
import { FaSearch } from "react-icons/fa"

export default class NavBar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "overview",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
      {
        id: 3,
        path: "/solutions",
        text: "solutions",
      },
      {
        id: 4,
        path: "/team",
        text: "team",
      },
      {
        id: 5,
        path: "/jobs",
        text: "jobs",
      },
      {
        id: 6,
        path: "/contact",
        text: "contact us",
      },
      {
        id: 7,
        path: " ",
        text: "search",
      },
    ],
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar-collapse",
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light">
        <AniLink fade to="/" className="navbar-brand">
          <img src={logo} alt="logo" width="120px" />
        </AniLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav ml-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} id={link.text} className="nav-item ml-sm-2">
                  <AniLink
                    fade
                    to={link.path}
                    className="nav-link text-uppercase navlink"
                  >
                    {link.text}
                  </AniLink>
                </li>
              )
            })}
          </ul>
          <a href="https://www.facebook.com" className="icon">
            <FaSearch />
          </a>
        </div>
      </nav>
    )
  }
}
