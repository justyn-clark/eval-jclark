import React, { Component } from 'react'
import  StyledDIV from './StyledDIV'

export default class SelectedItem extends Component {
  render () {
    const { children } = this.props
    return (
      <div>
        <StyledDIV>
          {children}
        </StyledDIV>
      </div>
    )
  }
}

