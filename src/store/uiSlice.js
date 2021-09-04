import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        notification: null
    },
    reducers: {
        showNotification(state, action) {
            state.notification = {
                message: action.payload.message
            }
        },
        clearNotification(state, action) {
            state.notification = null
        },
    }
})


export const uiActions = uiSlice.actions;

export default uiSlice;