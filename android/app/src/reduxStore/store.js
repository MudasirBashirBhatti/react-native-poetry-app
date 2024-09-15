import { configureStore } from '@reduxjs/toolkit'
import tabSlice from './features/counterSlice.js'
import tabBackBtnSlice from './features/tabBackBtnSlice.js'

export const store = configureStore({
    reducer: {
        tab: tabSlice,
        tabBackBtnSlice: tabBackBtnSlice,
    },
})