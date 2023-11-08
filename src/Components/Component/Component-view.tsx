// Redux
import {useDispatch} from 'react-redux';
import { useSelector } from '../../Types/redux/selector-type';
import {styleActions} from '../../Redux/slices';
// TYPES
import {E_STYLE_SHEET} from '../../Types/style/style-type'
import {WINDOW_SIZE} from '../../Types/window/windowSize-type'
// Styled Components
import {Button, Container} from '../../Style/styledComponents/main'
// Style
import { Style } from './style/TestComponent-style';
// -------------------------------------------------------------------------



function Component() {
  const {screenSize} = useSelector(state=> state.window)
  const dispatch = useDispatch();
  // Style
  const style = Style();
  const changeDark =()=> {
    dispatch(styleActions.setStyleSheet(E_STYLE_SHEET.DARK_MODE))
  }
  const changeLight =()=> {
    dispatch(styleActions.setStyleSheet(E_STYLE_SHEET.LIGHT_MODE))
  }
  return (
    <>
      <div style= {{width: screenSize === WINDOW_SIZE.MOBILE ?  '300px' : '100%'}}>
        {/* <ButtonDark onClick={changeDark}>Dark Mode</ButtonDark> */}
        <Button name='buttonLight' style={style.buttonLight} onClick={changeLight}>
          Light Mode </Button>
          <Button name='buttonDark' style={style.buttonDark} onClick={changeDark}>
          Dark Mode </Button>
          <Container name='dynamicContainer' style={style.dynamicContainer}>Screen Width Threshold: {screenSize}</Container>
      </div>
      {/* <Container>test</Container> */}
      </>
  )
}

export {Component}
