import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MAIN_STYLE, lightMode, darkMode } from '../../Style'
// TYPES
import { IGlobalStyle } from '../../Types/style/style-type'
import { E_STYLE_SHEET } from '../../Types/style/style-type'

// Get from codegen later
// --------------------------------

// -------------------------------
export interface IStyleState {
  styleSheet: IGlobalStyle
}

const INITIAL_STATE = {
  styleSheet: MAIN_STYLE
};

const styleSlice = createSlice({
  name: 'style',
  initialState: INITIAL_STATE,
  reducers: {
    setStyleSheet: (state, action: PayloadAction<E_STYLE_SHEET>) => {
      console.log('change palette')
      const  palette  = action.payload;
      // IMO enum types should use switch statements
      switch (palette){
        case E_STYLE_SHEET.LIGHT_MODE :
        state.styleSheet = lightMode;
        break;
        case E_STYLE_SHEET.DARK_MODE :
        state.styleSheet = darkMode;
        break;
        // Typing should always prevent this from running default 
        default:
        state.styleSheet = MAIN_STYLE;

    }
  }
}
});

export const styleActions = styleSlice.actions;

export const styleReducer = styleSlice.reducer;