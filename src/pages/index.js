import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Hero from "../components/Global/Hero"
import CallToAction from "../components/Home/CallToAction"
import Solutions from "../components/Home/Solutions"
import Testimonials from "../components/Home/Testimonials"
import Partners from "../components/Home/Partners"
import Awards from "../components/Home/Awards"
import HomeFooter from "../components/Home/HomeFooter"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      img={data.img.childImageSharp.fluid}
      styleClass="default-background"
      title="Solutions Built For Business"
    >
      <CallToAction />
    </Hero>
    <Solutions />
    <Testimonials />
    <Partners />
    <Awards />
    <HomeFooter />
  </Layout>
)

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

export default IndexPage
