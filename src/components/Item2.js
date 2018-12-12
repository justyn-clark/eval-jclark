import React, { Component } from 'react'
import  StyledDIV from './StyledDIV'

export default class Item2 extends Component {
      constructor(props) {
        super(props)
        this.state = {
           checked: this.props.isChecked
        }
      }

  render () {
    const { children } = this.props
    return (
      <div>
        <StyledDIV
          checked={this.state.checked}>
          {children}
        </StyledDIV>
      </div>
    )
  }
}

