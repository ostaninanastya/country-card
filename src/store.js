import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const APP_STATE = "APP_STATE"
const middleware = [thunk]
const loadState = () => {
    const serialisedState = window.localStorage.getItem(APP_STATE);
    if (!serialisedState) return undefined;
    return JSON.parse(serialisedState);
};
const saveState = (state) => {
    const serialisedState = JSON.stringify(state);
    window.localStorage.setItem(APP_STATE, serialisedState);
};

const store = createStore(rootReducer,
    loadState(),
    applyMiddleware(...middleware));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;