import React from 'react'
import StyledHeader from '../components/StyledHeader'
import Main from '../components/Main'

export const Header = () => {
  return (
    <StyledHeader>
      <Main>
        <h1>Sample code: List of first names selection</h1>
        <ul>
          <li>Create a git branch for your changes.</li>
          <li>Review sample code and refactor to at least two components: name list component and selected names display component</li>
          <li>Add functionality to toggle selected names and display below in "Selected Names" section.</li>
          <li>Add filter field above checkbox list and filter visible options based on matching characters</li>
          <li>Review sample code and refactor to improve code quality</li>
        </ul>
      </Main>
    </StyledHeader>
  )
}
