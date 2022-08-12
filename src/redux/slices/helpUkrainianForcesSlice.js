import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   ufOrder: [
      { location: 'Херсон', need: 'Шлеми', amount: 12, priceOfUnit: 500 },
      { location: 'Миколаїв', need: 'Бронежилети', amount: 15, priceOfUnit: 700 },
      { location: 'Запоріжжя', need: 'Тепловізори', amount: 21, priceOfUnit: 200 },
      { location: 'Харків', need: 'Автомати АК-47', amount: 67, priceOfUnit: 400 },
      { location: 'Маріуополь', need: 'Пікапи', amount: 4, priceOfUnit: 1900 },
      { location: 'Ізюм', need: 'Тепловізори', amount: 12, priceOfUnit: 200 },
      { location: 'Гуляйполе', need: 'Гранати', amount: 32, priceOfUnit: 90 }
   ],
   activeOption: undefined
}

const helpUkrainianForcesSlice = createSlice({
   name: 'options',
   initialState,
   reducers: {
      setActiveOption(state, action) {
         state.activeOption = action.payload
      }
   }
})

export const { setOrders } = helpUkrainianForcesSlice.actions;

export const { setActiveOption } = helpUkrainianForcesSlice.actions;

export default helpUkrainianForcesSlice.reducer 