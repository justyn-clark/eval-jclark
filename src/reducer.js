import {
  FILTER_LIST,
  SELECT_ITEM,
  TOGGLE_ITEM,
} from './constants'

const initialState = {
  namesList: [
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
  ],
  selected: [],
  selectedList: [],
  name: null,
  filteredList: [
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
  ],
  isChecked: null
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        name: action.item,
        selectedList: [...state.selected],
        isChecked: action.isChecked
      }
    case FILTER_LIST:
      return {
        ...state,
        filteredList: action.list
      }
    case TOGGLE_ITEM:
    if (state.selected[action.index] &&  !action.isChecked) {
        return {
          ...state,
          selected: [...state.selected.slice(0, action.index)],
        };
      }
      return {
        ...state,
        selected: [...state.selected.filter(item => item !== action.val), action.val],
        index: action.index,
      };
    default:
      return state
  }
}

export default appReducer
