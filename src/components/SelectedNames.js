import React, { Component } from 'react'
import SelectedItem from '../components/SelectedItem'

export default class SelectedNames extends Component {
  componentDidMount () {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="listCol">
        <h3>Selected Names:</h3>
        <div>
          {this.props.selected.map((name, key) =>
            <SelectedItem key={key}>{name}</SelectedItem>
          )}
        </div>
      </div>
    )
  }
}
