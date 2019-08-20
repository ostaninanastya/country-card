import {
    COUNTRIES_FETCHED_FAILED,
    COUNTRIES_FETCHED_SUCCESS,
    COUNTRIES_REQUESTED,
    COUNTRIES_FILTER
} from '../actions/countries'

const initialState = {
    data: [],
    visibleItems: [],
    countriesFetching: false,
    error: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case COUNTRIES_REQUESTED:
            return {
                ...state,
                countriesFetching: true
            }

        case COUNTRIES_FETCHED_SUCCESS:
            let data = action.payload
            let visibleItems = (state.filterValue === '') ? data :
                data.filter(item => {
                    return item.name.toLowerCase().includes(state.filterValue);
                })
            return {
                ...state,
                countriesFetching: false,
                data: data,
                visibleItems: visibleItems
            }
        case COUNTRIES_FETCHED_FAILED:
            return {
                ...state,
                countriesFetching: false,
                error: action.error,
            }
        case COUNTRIES_FILTER:
            let newList = state.data.filter(item => {
                return item.name.toLowerCase().includes(action.payload);
            });
            return {
                ...state,
                filterValue: action.payload,
                visibleItems: newList
            }
        default:
            return state
    }
}
