import React from 'react'
import styled from 'styled-components'

const ProjectGroup = styled.div`
  background: black;
`

const ProjectTitle = styled.h3`
`

const ProjectDesc = styled.p`
  
`

const ProjectDetail = props => (
  <ProjectGroup>
    <ProjectTitle>{props.title}</ProjectTitle>
    <ProjectDesc
      dangerouslySetInnerHTML = {
        {
          __html: props.desc.childMarkdownRemark.html,
        }
      }
    />
  </ProjectGroup>
)

export default ProjectDetail
