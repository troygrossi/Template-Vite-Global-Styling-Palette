import { palette } from "../palette";
import { MAIN_STYLE } from "./MAIN-style";
// Types
import { IGlobalStyle } from "../../../Types/style/style-type";

// If adding a new custom styled component make sure to update the type file
// This ensures all color palette modes contain the same style properties
export const darkMode: IGlobalStyle = {
    ...MAIN_STYLE,
    container: {
        main: {
          background: palette.color.dark.main,
          borderRadius: "20px",
          boxShadow: palette.boxShadow.containerDark,
          fontFamily: palette.fontFamily.main,
          color: palette.fontColor.white,
        },
      },
};
