// Types
import {IPalette} from '../../Types/style/style-type';

// Palette Design --------------------------------------------------------------
export const fontFamily = {
    main: 'Arial, Helvetica, sans-serif'
  }
  export const fontColor = {
    white: 'rgba(255, 255, 255, 1)',
    black: 'rgba(0, 0, 0, 1)'
  }
  export const color  = {
      light: {
        main: 'rgba(240, 240, 240, 1)',
        light: 'rgba(250, 250, 250, 1)',
        dark: 'rgba(230, 230, 230, 1)',
        contrastText: 'rgba(60, 60, 60, 1)',
      },
      dark: {
        main: 'rgba(60, 60, 60, 1)',
        light: 'rgba(80, 80, 80, 1)',
        dark: 'rgba(50, 50, 50, 1)',
        contrastText: '',
      },
      shadow: {
        light: 'rgba(255, 255, 255, 1)',
        dark: 'rgba(160, 160, 160, 1)'
      },
      gold: {
        main: 'rgba(225, 173, 49, 1)',
        light: 'rgba(238, 207, 134, 1)',
        dark: 'rgba(205, 152, 29, 1)',
        contrastText: 'rgba(255, 255, 255, 1)',
      },
      grey: {
        main: 'rgba(200, 200, 200, 1)',
        dark: 'rgba(145, 145, 145, 1)'
      },
      green: {
        main: '',
        light: 'rgba(20, 117, 0, 1)',
        dark: 'rgba(26, 158, 0, 1)',
        contrastText: 'rgba(255, 255, 255, 1)',
      },
      red: {
        main: 'rgba(220, 30, 30, 1)',
        light: 'rgba(234, 98, 98, 1)',
        dark: 'rgba(184, 25, 25, 1)',
        contrastText: 'rgba(255, 255, 255, 1)',
      }
  }
  export const gradient = {

    buttonLight: 'linear-gradient( 170deg,' + color.light.light + ',' + color.light.dark + ')',
    insetButtonLight: 'linear-gradient( 170deg,' + color.light.dark + ',' + color.light.light + ')',
    buttonDark: 'linear-gradient( 170deg,' + color.dark.light + ',' + color.dark.dark + ')',
    insetButtonDark: 'linear-gradient( 170deg,' + color.dark.dark + ',' + color.dark.light + ')',

  }
  export const boxShadow = {
    containerLight: 'linear-gradient( 170deg,' + color.light.light +  ',' + color.light.dark + ')',
    containerDark: 'linear-gradient( 170deg,' + color.dark.main +  ',' + color.dark.main + ')',
    insetContainerLight: ' inset 3px 3px 7px ' + color.shadow.dark +  ', inset -5px -5px 10px ' + color.shadow.light,
    button: '2px 2px 9px ' + color.shadow.dark +  ', -5px -5px 10px ' + color.shadow.light,
    insetButtonLight: 'inset 5px 5px 10px ' + color.shadow.dark +  ', inset -5px -5px 8px ' + color.shadow.light,
    insetButtonLDark: 'inset 5px 5px 10px ' + color.shadow.dark +  ', inset -5px -5px 8px ' + color.shadow.light,
  }

  // Create a global pelette
// --------------------------------------------------------------------------------------------------------------------------------
export const palette: IPalette = {
  fontFamily: {...fontFamily},
  fontColor: {...fontColor},
  color: {...color},
  gradient: {...gradient},
  boxShadow: {...boxShadow}
}