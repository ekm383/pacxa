import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Button = ({ styleClass, text, link }) => {
  return (
    <div>
      <AniLink fade className={styleClass} to={link}>
        {text}
      </AniLink>
    </div>
  )
}

export default Button
