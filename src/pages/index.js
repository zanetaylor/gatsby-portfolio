import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import ProjectDetail from '../components/projectDetail'
// import data from '../../data.json'

const IndexPage = ({ data }) => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Portfolio</h1>
      </div>
    </div>
    <h1>All the projects</h1>
    <div className="Projects">
      {data.allContentfulProject.edges.map(edge => (
      <Card title={edge.node.title} summary={edge.node.summary} />
    ))}
    </div>

    {data.allContentfulProject.edges.map(edge => (
      <ProjectDetail title={edge.node.title} desc={edge.node.description} />
    ))}
  </div>
)

export default IndexPage

export const query = graphql `
  query ProjectsQuery {
    allContentfulProject {
      edges {
        node {
          title
          summary {
            childMarkdownRemark {
              html
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`