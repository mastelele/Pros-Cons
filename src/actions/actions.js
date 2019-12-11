import * as types from './actionTypes'

export default function defaultAction() {
  return dispatch => {
    dispatch({
      type: types.DEFAULT_ACTION,
    })
  }
}
