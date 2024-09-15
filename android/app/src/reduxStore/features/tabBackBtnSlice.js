import { createSlice } from '@reduxjs/toolkit';

export const tabBackBtnSlice = createSlice({
    name: 'tabBackBtn',
    initialState: {
        isBackBtnPressed: true,
    },
    reducers: {
        setIsBackBtnPressed: (state, actions) => {
            state.isBackBtnPressed = actions.payload
        },
    },
});

export const { setIsBackBtnPressed } = tabBackBtnSlice.actions;
export default tabBackBtnSlice.reducer;