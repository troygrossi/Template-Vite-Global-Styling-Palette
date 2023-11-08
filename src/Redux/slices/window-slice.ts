import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// TYPES
import {WINDOW_SIZE} from '../../Types/window/windowSize-type'



export interface IWindowState {
  screenSize: WINDOW_SIZE
}

const INITIAL_STATE: IWindowState = {
  screenSize: WINDOW_SIZE.DESKTOP
}

const slice = createSlice({
    name: 'window',
    initialState: INITIAL_STATE,
    reducers: {
  
      // GET PROFILE
      getWindow(state, action: PayloadAction<WINDOW_SIZE>) {
       state.screenSize = action.payload;
       console.log(state.screenSize)
      },
    }
    });


    // Reducer
export const windowReducer = slice.reducer;
export const windowActions = slice.actions;