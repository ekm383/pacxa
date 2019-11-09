import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Global/Hero"
import { graphql } from "gatsby"
import ContactForm from "../components/ContactForm"

const contact = ({ data }) => {
  return (
    <Layout>
      <Hero
        img={data.img.childImageSharp.fluid}
        styleClass="hero"
        title="Contact Us"
      />
      <ContactForm />
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

export default contact
