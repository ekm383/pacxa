import React from "react"
import "./layout.css"
import "./bootstrap.min.css"
import NavBar from "../components/Global/NavBar"
import Footer from "../components/Global/Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
