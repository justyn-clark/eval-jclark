import {
  FILTER_LIST,
  TOGGLE_ITEM,
} from './constants'

export function toggleItem(isChecked, val,  index) {
  return {
    type: TOGGLE_ITEM,
    isChecked,
    val,
    index,
  }
}

export function filterList(list) {
  return {
    type: FILTER_LIST,
    list,
  }
}

