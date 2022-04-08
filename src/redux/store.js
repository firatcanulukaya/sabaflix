import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import util from "./reducers/util";
import contentAll from "./reducers/contentAll";
import lastAdded from "./reducers/lastAdded";
import popular from "./reducers/popular";
import header from "./reducers/header";
import filter from "./reducers/filter";
import search from "./reducers/search";
import modal from "./reducers/modal";

const rootReducer = combineReducers({
    util,
    contentAll,
    lastAdded,
    popular,
    header,
    filter,
    search,
    modal
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;