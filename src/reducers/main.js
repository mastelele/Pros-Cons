import produce from 'immer'
import * as types from '../actions/actionTypes'

const defaultState = {}

const main = (state = defaultState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        break
    }
  })

export default main
