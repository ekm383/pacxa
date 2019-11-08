import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Global/Hero"
import Solutions from "../components/Solutions"

const solutions = ({ data }) => {
  return (
    <Layout>
      <Hero
        img={data.img.childImageSharp.fluid}
        styleClass="hero"
        title="Our Solutions"
      />
      <Solutions />
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

export default solutions
