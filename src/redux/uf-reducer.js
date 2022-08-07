const SET_ACTIVE_OPTION = 'SET-ACTIVE-OPTION'

const initialState = {
   order: [
      { location: 'Херсон', need: 'Шлеми', amount: 12, priceOfUnit: 500 },
      { location: 'Миколаїв', need: 'Бронежилети', amount: 15, priceOfUnit: 700 },
      { location: 'Запоріжжя', need: 'Тепловізори', amount: 21, priceOfUnit: 200 },
      { location: 'Харків', need: 'Автомати АК-47', amount: 67, priceOfUnit: 400 },
      { location: 'Маріуополь', need: 'Пікапи', amount: 4, priceOfUnit: 1900 },
      { location: 'Ізюм', need: 'Тепловізори', amount: 12, priceOfUnit: 200 },
      { location: 'Гуляйполе', need: 'Гранати', amount: 32, priceOfUnit: 90 },
   ]
}

const ufReducer = (state = initialState, action) => {
   switch(action.type) {
      case SET_ACTIVE_OPTION: {
         return {
            ...state,
            ufPage: action.ufPage
         };
      }
      default: 
         return state
   }
}

export const setActiveOption = (ufPage) => {
   return {
      type: SET_ACTIVE_OPTION, ufPage: ufPage
   }
}

export default ufReducer