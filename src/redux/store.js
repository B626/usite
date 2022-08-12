import { configureStore } from '@reduxjs/toolkit'
import ufOrder from './slices/helpUkrainianForcesSlice'
import imOrder from './slices/helpImmigrantsSlice'

export const store = configureStore({
   reducer: {
      ufOrder,
      imOrder
   }
})

