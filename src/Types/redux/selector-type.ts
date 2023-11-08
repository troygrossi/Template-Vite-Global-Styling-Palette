import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
  } from 'react-redux'
  import {IAppState} from "../../Redux/redux-config";
  
  
  export const useSelector: TypedUseSelectorHook<IAppState> = useReduxSelector;