import {SHOW_CARD} from '../actions/card'

const initialState = {
    showCard: false,
    card: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CARD:
            return {
                ...state,
                showCard: true,
                card: action.payload
            }
        default:
            return state
    }
}
