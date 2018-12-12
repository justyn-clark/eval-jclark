import React, { Component } from 'react'
import Item2 from '../components/Item2'

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
          {this.props.isChecked && this.props.selected.map((name, key) =>
            <Item2 key={key}>{name}</Item2>
          )}
        </div>
      </div>
    )
  }
}
