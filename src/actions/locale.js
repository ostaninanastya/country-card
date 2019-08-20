export const CHANGE_LOCALE_LANGUAGE_SUCCESS = 'CHANGE_LOCALE_LANGUAGE_SUCCESS';

export default function changeLocale(locale) {
    return {
        type: CHANGE_LOCALE_LANGUAGE_SUCCESS,
        payload: locale
    }
}