import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   imOrder: [
      { cityRegion: 'Київ/Київська область', street: 'default street', house: 17, flat: 754 },
      { cityRegion: 'Дніпропетровськ/Дніпропетровська область', region: 'Дніпропетровська область', street: 'default street', house: 23, flat: 643 },
      { cityRegion: 'Одеса/Одеська область', street: 'default street', house: 45, flat: 964 },
      { cityRegion: 'Львів/Львівська область', street: 'default street', house: 23, flat: 364 },
      { cityRegion: 'Кривий ріг/Криворізька область', street: 'default street', house: 53, flat: 975 },
      { cityRegion: 'Вінниця/Вінницька область', street: 'default street', house: 28, flat: 234 },
      { cityRegion: 'Чернігів/Чернігівська область', street: 'default street', house: 12, flat: 543 },
      { cityRegion: 'Полтава/Полтавська область', street: 'default street', house: 785, flat: 64 },
      { cityRegion: 'Хмельницький/Хмельницька область', street: 'default street', house: 86, flat: 352 },
      { cityRegion: 'Черкаси/Черкаська область', street: 'default street', house: 99, flat: 643 },
      { cityRegion: 'Чернівці/Чернівецька область', street: 'default street', house: 2, flat: 257 },
      { cityRegion: 'Житомир/Житомирська область', street: 'default street', house: 56, flat: 734 },
      { cityRegion: 'Рівне/Рівненська область', street: 'default street', house: 87, flat: 6 },
      { cityRegion: 'Івано-Франківськ/Івано-Франківська область', street: 'default street', house: 86, flat: 78 },
      { cityRegion: 'Кропивницький/Кропивницька область', street: 'default street', house: 43, flat: 783 },
      { cityRegion: 'Тернопіль/Тернопільска область', street: 'default street', house: 44, flat: 954 },
      { cityRegion: 'Луцьк/Луцька область', street: 'default street', house: 66, flat: 222 },
   ],
   activeOption: undefined,
   activeRadio: undefined
}

const helpImmigrantsSlice = createSlice({
   name: 'options',
   initialState,
   reducers: {
      setActiveOption(state, action) {
         state.activeOption = action.payload
      },
      setActiveRadio(state, action) {
         state.activeRadio = action.payload
      }
   }
})

export const { setActiveOption } = helpImmigrantsSlice.actions;

export const { setActiveRadio } = helpImmigrantsSlice.actions;

export default helpImmigrantsSlice.reducer 