import { fontFamily, fontColor, color, gradient, boxShadow } from "../../Style/globalStyling/palette";

// *Note
// Update the type before adding new styled components
// This will ensure all color 'modes'/palettes have the same components
// '?' makes the property optional

// The global palette conforms to this type
export interface IPalette {
    fontFamily: typeof fontFamily,
    fontColor: typeof fontColor,
    color: typeof color,
    gradient: typeof gradient,
    boxShadow: typeof boxShadow
  }


// Each styled component conforms to this type
interface IComponentStyle {
  background?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  color?: string;
  fontFamily?: string;
  "&:active"?: object;
}

// Each global style file conforms to this type
// Extends: --> IPalette --> IComponentStyle
interface IGlobalStyle {
  palette: IPalette;
  button: {
    main: IComponentStyle;
    dark: IComponentStyle;
  };
  container: {
    main: IComponentStyle;
  }
  // ex of more:
  // background: {
  //   page: IComponentStyle,
  //   dashboard: IComponentStyle,
  // }
  // container: {
  //   neumorph: IComponentStyle,
  //   neumorphInset: IComponentStyle,
  // }
  // card: {
  //   groupHover: IComponentStyle
  // }
}

// Enum for each global style sheet 
enum E_STYLE_SHEET {
    DARK_MODE = "DARK_MODE",
    LIGHT_MODE = "LIGHT_MODE"
  }

export { type IGlobalStyle, E_STYLE_SHEET };
