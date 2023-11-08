import { combineReducers } from 'redux';
// Slices
import {styleReducer} from '../slices'
import { windowReducer } from '../slices/window-slice';
// TYPES
import { IStyleState } from '../slices';
import { IWindowState } from '../slices/window-slice';


export interface IAppState {
    style: IStyleState
    window: IWindowState
  }

export const reducers = combineReducers({
    style: styleReducer,
    window: windowReducer
  });
