import {
  FILTER_LIST,
  SELECT_ITEM,
  TOGGLE_ITEM,
} from './constants'

export function selectItem(isChecked, item) {
  return {
    type: SELECT_ITEM,
    isChecked,
    item
  };
}

export function toggleItem(isChecked, val,  index) {
  return {
    type: TOGGLE_ITEM,
    isChecked,
    val,
    index,
  };
}

export function filterList(list) {
  return {
    type: FILTER_LIST,
    list,
  };
}

