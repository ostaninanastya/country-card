import {combineReducers} from 'redux'
import countriesReducer from './countries'
import cardReducer from './card'
import localeReducer from './locale'

export default combineReducers({
    countries: countriesReducer,
    card: cardReducer,
    localeReducer
})