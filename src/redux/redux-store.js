import ufReducer from "./uf-reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";

let reducers = combineReducers({
   helpUkrainianForces: ufReducer
})

let store = createStore(reducers)

window.store = store

export default store