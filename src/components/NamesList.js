import React, { Component } from 'react'
import NameItem from './NameItem'

export default class NamesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: props.isChecked || false,
      checkedItems: new Map(),
    }
  }

  handleChecked = (e) => {
    let value = e.target.value
    let isChecked = e.target.checked
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(value, isChecked) }))
    this.setState({ isChecked: !this.state.isChecked })
  }

  render () {
    return (
      <div className="listCol">
        <h3>Names:</h3>
        <ul>
          {this.props.filteredList.map((name, key) =>
            <NameItem
              key={key}
              id={key}
              name={name}
              checked={!!this.state.checkedItems.get(name)}
              onChange={(e)=> {
                this.props.onToggleItem(!this.state.checkedItems.get(name), e.target.value, key)
                this.handleChecked(e)
              }}
            />
          )}
          {!this.props.filteredList.length && <div className='red'>No matching search results</div>}
        </ul>
      </div>
    )
  }
}

