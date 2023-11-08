import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { windowActions } from "../Redux/slices";
// TYPES
import { WINDOW_SIZE, WINDOW_THRESHOLD } from "../Types/window/windowSize-type";
// MEDIA QUERY FOR WINDOW SIZE(FOR STYLING)
// ---------------------------------------------------------------------------------------------------------------------
// Media queries are not supported with in-line styling in react ex: style={}
// Media queries do work with the css and classname convention
// Material UI does have a convention using theme.breakpoints as well
// However, instead of using css along with theme.breakpoints
// we can consitently use inline styling and use this cutom event
// listener hook for consitency for all media queries
export const useWindowQuery = () => {
  const dispatch = useDispatch();

  // make enum for window sizes with numbers
  // at threshold call function and simply check for window.innerWidth
  //  use a switch statement with less than values to compare the current screen size
  const handleChangeWindowState = () => {
    // Check which Threshold was passed with switch statement
    // Check if the threshold being passed was for the screen getting bigger or smaller
    switch (true) {
      case window.innerWidth > WINDOW_THRESHOLD.DESKTOP:
        dispatch(windowActions.getWindow(WINDOW_SIZE.DESKTOP));
        break;
      case window.innerWidth <= WINDOW_THRESHOLD.TABLET_BIG &&
        window.innerWidth > WINDOW_THRESHOLD.TABLET_SMALL:
        console.log(window.innerWidth)
        dispatch(windowActions.getWindow(WINDOW_SIZE.TABLET_BIG));
        break;
      case window.innerWidth <= WINDOW_THRESHOLD.TABLET_SMALL &&
        window.innerWidth > WINDOW_THRESHOLD.MOBILE:
        dispatch(windowActions.getWindow(WINDOW_SIZE.TABLET_SMALL));
        break;
      case window.innerWidth <= WINDOW_THRESHOLD.MOBILE:
        dispatch(windowActions.getWindow(WINDOW_SIZE.MOBILE));
        break;
      default:
        dispatch(windowActions.getWindow(WINDOW_SIZE.DESKTOP));
        break;
    }
  };

  useEffect(() => {
    // Constants that represent different device screen widths
    // mDesktop is anything over  1280px
    const mTabletBig = window.matchMedia("(max-width: 1280px)");
    const mTabletSmall = window.matchMedia("(max-width: 768px)");
    const mMobile = window.matchMedia("(max-width: 480px)");


    //Create custom event listeners that activate when screen size moves past the constant threshold
    mTabletBig.addEventListener("change", handleChangeWindowState);
    mTabletSmall.addEventListener("change", handleChangeWindowState);
    mMobile.addEventListener("change", handleChangeWindowState);

    //Cleanup when component unmounts, remove custom event listeners
    return () => {
      mTabletBig.removeEventListener("change", handleChangeWindowState);
      mTabletSmall.removeEventListener("change", handleChangeWindowState);
      mMobile.removeEventListener("change", handleChangeWindowState);
    };
  }, []);
  // return screen size object
};
// ---------------------------------------------------------------------------------------------------------------------
