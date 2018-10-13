import React from 'react'

import './card.css'

const Card = props => (
  <div className="Card">
    <h3>{props.title}</h3>
    <div
      dangerouslySetInnerHTML = {
        {
          __html: props.summary.childMarkdownRemark.html,
        }
      }
    />
  </div>
)

export default Card