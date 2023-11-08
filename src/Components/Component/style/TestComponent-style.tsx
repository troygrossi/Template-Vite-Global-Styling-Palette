import { useSelector } from "../../../Types/redux/selector-type";
import {WINDOW_SIZE} from '../../../Types/window/windowSize-type'

export const Style = () => {
  const {screenSize} = useSelector(state=>state.window)
  const {palette} = useSelector(state=>state.style.styleSheet)

  const style = {

    buttonDark: {
      margin: '20px'
    },
    buttonLight: {
      margin: '20px'
    },
    dynamicContainer: {
      height: '50px',
      width: '700px'
    }
  }

  switch(screenSize){
    case WINDOW_SIZE.DESKTOP: 
    style.dynamicContainer = {
      ...style.dynamicContainer,
    }
      break;
      case WINDOW_SIZE.TABLET_BIG: 
      style.dynamicContainer = {
        ...style.dynamicContainer,
        width: '500px'
      }
      break;
      case WINDOW_SIZE.TABLET_SMALL: 
      style.dynamicContainer = {
        ...style.dynamicContainer,
        width: '400px'
      }
      break;
      case WINDOW_SIZE.MOBILE: 
      style.dynamicContainer = {
        ...style.dynamicContainer,
        width: '300px'
      }
      break;
  }

  return style
}
  
