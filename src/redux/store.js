import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import util from "./reducers/util";
import contentAll from "./reducers/contentAll";
import lastAdded from "./reducers/lastAdded";
import popular from "./reducers/popular";

const rootReducer = combineReducers({
    util,
    contentAll,
    lastAdded,
    popular
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;