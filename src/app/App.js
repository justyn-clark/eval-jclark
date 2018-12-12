import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { toggleItem, filterList } from '../actions'
import NamesList from '../components/NamesList'
import { Header } from '../components/Header'
import SelectedNames from '../components/SelectedNames'
import Container from '../components/Container'
import Input from '../components/Input'
import GlobalStyle from '../global-styles';
import SearchWrapper from '../components/SearchWrapper'
import Main from '../components/Main'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      currentlyDisplayed: this.props.namesList
    }
  }

  onInputChange = (e) => {
    let newlyDisplayed = this.props.namesList.filter(name => {
      return name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1
    })
    this.setState({
      searchTerm: e.target.value,
      currentlyDisplayed: newlyDisplayed
    })
    this.props.onFilterList(newlyDisplayed)
  }

  render () {
    return (
      <div>
        <Header />
        <Main>
          <SearchWrapper>
            <h2>Search Names</h2>
            <Input
              type="text"
              placeholder="Type name here..."
              onChange={(e)=> this.onInputChange(e)}
            />
          </SearchWrapper>
          <Container>
            <NamesList {...this.props} />
            <SelectedNames {...this.props} />
          </Container>
        </Main>
        <GlobalStyle />
      </div>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onToggleItem: (isChecked, val, index) => dispatch(toggleItem(isChecked, val, index)),
    onFilterList: text => dispatch(filterList(text)),
  };
}

export const mapStateToProps = (state) => {
  return {
    selected: state.app.selected,
    name: state.app.name,
    namesList: state.app.namesList,
    filteredList: state.app.filteredList,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
)(App)
