import { createSlice } from '@reduxjs/toolkit';

export const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        tabIndex: 0,
    },
    reducers: {
        setTabIndex: (state, actions) => {
            state.tabIndex = actions.payload
        },
    },
});

export const { setTabIndex } = tabSlice.actions;
export default tabSlice.reducer;