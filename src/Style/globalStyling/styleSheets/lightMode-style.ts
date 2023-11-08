// import { palette } from "../palette";
import { MAIN_STYLE } from "./MAIN-style";
// Types
import { IGlobalStyle } from "../../../Types/style/style-type";

// If adding a new custom styled component make sure to update the type file
// This ensures all color palette modes contain the same style properties
export const lightMode: IGlobalStyle = {
  ...MAIN_STYLE
  // Destructure default object and overwrite below
  // * Default was written with light mode in mind so there are currentluy no overwirtes below
  // ...
  // ...
  // ...
};
