import {
  FILTER_LIST,
  TOGGLE_ITEM,
} from './constants'

const data = [
  "Yasujiro",
  "F.W.",
  "Sergei",
  "Carl",
  "Howard",
  "Luis",
  "Martin",
  "Billy",
  "Charles",
  "Kar-Wai",
  "Jean-Luc",
  "Ingmar",
  "Francis",
  "Akira",
  "Jean",
  "John",
  "Federico",
  "Stanley",
  "Alfred",
  "Orson",
  "Alexander",
  "Frank",
  "Ingrid",
  "Horatio",
  "Akiva",
  "Luciano",
  "George",
  "Stacey",
  "Horton",
  "Carrie",
  "Alfonse",
  "Yasmin"
]

const initialState = {
  namesList: data,
  filteredList: data,
  selected: [],
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_LIST:
      return {
        ...state,
        filteredList: action.list
      }
    case TOGGLE_ITEM:
      if (state.selected.indexOf(action.val) === -1) {
        return {
          ...state,
          selected: [...state.selected, action.val],
        }

      } else if (state.selected.indexOf(action.val) > -1) {
        return {
          ...state,
          selected: state.selected.filter(item => item !== action.val),
        }
      }
    default:
      return state
  }
}

export default appReducer
