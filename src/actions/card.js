export const SHOW_CARD = 'SHOW_CARD'

export function handleShowCountryCard(value) {
    return {
        type: SHOW_CARD,
        payload: value
    }
}