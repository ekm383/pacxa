import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Overview from "../components/About/Overview"
import Hero from "../components/Global/Hero"
import Team from "../components/About/Team"
import Logos from "../components/Logos"
import Awards from "../components/About/Awards"
import HomeFooter from "../components/Home/HomeFooter"

const about = ({ data }) => {
  return (
    <Layout>
      <Hero
        img={data.img.childImageSharp.fluid}
        styleClass="hero"
        title="About Pacxa"
      />
      <Overview />
      <Logos />
      <Awards />
      <Team />
      <HomeFooter />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "home-background-image.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default about
