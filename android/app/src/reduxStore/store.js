import { configureStore } from '@reduxjs/toolkit'
import tabSlice from './features/counterSlice.js'

export const store = configureStore({
    reducer: {
        tab: tabSlice
    },
})