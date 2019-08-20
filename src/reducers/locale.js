import {CHANGE_LOCALE_LANGUAGE_SUCCESS} from '../actions/locale'

export const RU = 'ru'
export const EN = 'en'

export default (state = {locale: EN}, action) => {
    switch (action.type) {
        case CHANGE_LOCALE_LANGUAGE_SUCCESS:
            return {
                ...state,
                locale: action.payload
            }
        default:
            return state;
    }
};