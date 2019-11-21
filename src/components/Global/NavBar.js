import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../../images/pacxa-logo.png"

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
        path: "/contact",
        text: "contact us",
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
                <li
                  key={link.id}
                  id={link.text}
                  className="nav-item ml-sm-2 nav-link text-uppercase navlink"
                >
                  <AniLink
                    fade
                    to={link.path}
                    activeStyle={
                      link.text === "contact us"
                        ? {}
                        : { textDecoration: "underline" }
                    }
                  >
                    {link.text}
                  </AniLink>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
