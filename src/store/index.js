import { createStore } from 'redux'

const initialState = {
    count: 0
}

const reducer = (state=initialState, action) => {
    return state
}

export const store = createStore(reducer)