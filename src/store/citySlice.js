import { createSlice } from '@reduxjs/toolkit'

const citySlice = createSlice({
    name: 'city',
    initialState: {
        city: null,
        weather: null
    },
    reducers: {
        addCity(state, action) {
            state.city = action.payload 
        },
        addWeather(state, action) {
            state.weather = action.payload 
        },
    }
})


export const cityActions = citySlice.actions;

export default citySlice;