import axios from 'axios'

export const COUNTRIES_REQUESTED = "COUNTRIES_REQUESTED"
export const COUNTRIES_FETCHED_SUCCESS = "COUNTRIES_FETCHED_SUCCESS"
export const COUNTRIES_FETCHED_FAILED = "COUNTRIES_FETCHED_FAILED"
export const COUNTRIES_FILTER = "COUNTRIES_FILTER"

const url = "https://restcountries.eu/rest/v2/all"

export function handleGetCountries() {
    return dispatch => {
        dispatch({
            type: COUNTRIES_REQUESTED
        })
        axios.get(url)
            .then((response) => {
                    console.log(response.data);
                    dispatch({
                        type: COUNTRIES_FETCHED_SUCCESS,
                        payload: response.data
                    })
                }
            ).catch((response) => dispatch({
            type: COUNTRIES_FETCHED_FAILED,
            error: response.error
        }))
    }
}

export function handleCountryFilter(value) {
    return {
        type: COUNTRIES_FILTER,
        payload: value
    }
}