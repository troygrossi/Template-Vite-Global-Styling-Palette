import { palette } from "../palette";
// Types
import { IGlobalStyle } from "../../../Types/style/style-type";

// Refer to IGlobalStyle to add more properties to globalStyle
// Refer to IComponentStyle to add more properties to styled components
export const MAIN_STYLE: IGlobalStyle = {
  palette: {
    ...palette,
  },
  button: {
    main: {
      background: palette.gradient.buttonLight,
      borderRadius: "20px",
      boxShadow: palette.boxShadow.button,
      fontFamily: palette.fontFamily.main,
      color: palette.fontColor.black,
      "&:active": {
        background: palette.gradient.insetButtonLight,
        borderRadius: "20px",
        boxShadow: palette.boxShadow.insetButtonLight,
      },
    },
    dark: {
      background: palette.gradient.buttonDark,
      borderRadius: "20px",
      boxShadow: palette.boxShadow.button,
      fontFamily: palette.fontFamily.main,
      color: palette.fontColor.black,
      "&:active": {
        background: palette.gradient.insetButtonDark,
        borderRadius: "20px",
        boxShadow: palette.boxShadow.button,
      },
    },
  },
  container: {
    main: {
      background: palette.color.light.main,
      borderRadius: "20px",
      boxShadow: palette.boxShadow.containerLight,
      fontFamily: palette.fontFamily.main,
      color: palette.fontColor.black,
    },
  },
};
