import { FETCH_MESSAGE } from '../actions/index.mjs'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_MESSAGE:
            return action.payload.data
        default:
            return state
    }
}