import { configureStore } from '@reduxjs/toolkit'
import order from './slices/optionSlice'

export const store = configureStore({
   reducer: {order}
})


// import ufReducer from "./uf-reducer";

// let store = {
//    _state: {
//       helpUkrainianForces: {
//          order: [
//             { location: 'Херсон', need: 'Шлеми', amount: 12, priceOfUnit: 500 },
//             { location: 'Миколаїв', need: 'Бронежилети', amount: 15, priceOfUnit: 700 },
//             { location: 'Запоріжжя', need: 'Тепловізори', amount: 21, priceOfUnit: 200 },
//             { location: 'Харків', need: 'Автомати АК-47', amount: 67, priceOfUnit: 400 },
//             { location: 'Маріуополь', need: 'Пікапи', amount: 4, priceOfUnit: 1900 },
//             { location: 'Ізюм', need: 'Тепловізори', amount: 12, priceOfUnit: 200 },
//             { location: 'Гуляйполе', need: 'Гранати', amount: 32, priceOfUnit: 90 },
//          ]
//       }
//    },
//    _callSubscriber() {
//       console.log('state')
//    },
//    getState() {
//       return this._state
//    },
//    subscribe(observer) {
//       this._callSubscriber = observer;
//   },
//    dispatch(action) {
//       this._state.helpUkrainianForces = ufReducer(this._state.helpUkrainianForces, action)
//       this._callSubscriber(this._state);
//    }
// }

// export default store;

// window.store = store;