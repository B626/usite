import ufReducer from "./uf-reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";

const reducers = combineReducers({
   helpUkrainianForces: ufReducer
})

const store = createStore(reducers)

window.store = store

export default store