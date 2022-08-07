import { configureStore } from '@reduxjs/toolkit'
import order from './slices/optionSlice'

export const store = configureStore({
   reducer: {order}
})
