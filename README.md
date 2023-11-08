# Global Styles

## Create/Edit The Global Palette
### 1) Create Properties For Gloabl Palette
- Style/globalStyling/palette.ts
- Ex:
```ts
const color  = {
    light: {
      main: ,
      contrast: ,
      // ...
      // ...
      // ...
    },
    dark: {
      main: ,
      contrast: ,
      // ...
      // ...
      // ...
    },
}
const boxShadow = {
    containerLight: 'linear-gradient( 170deg,' + color.light.main +  ',' + color.light.contrast + ')',
    containerDark: 'linear-gradient( 170deg,' + color.dark.main +  ',' + color.dark.contrast + ')',
    // ...
    // ...
    // ...
}
  export const gradient = {
    buttonLight: 'linear-gradient( 170deg,' + color.light.light + ',' + color.light.dark + ')',
    buttonDark: 'linear-gradient( 170deg,' + color.dark.light + ',' + color.dark.dark + ')',
    // ...
    // ...
    // ...
  }
```


### 2) Create Palette Type
- Types/style/style-type.ts
- Vs code will offer suggestions for child properties that are part of the global styles
- Vs code will lint properties that do not belong or are undefined
```ts
interface IPalette {
  color: typeof color
  boxShadow: typeof boxShadow
  // ...
  // ...
  // ...

}
```
### 3) Initialize Global Palette
- Style/globalStyling/palette.ts
- Initialized with all palette properties from Step 1
- Typed with IPallete from Step 2
```ts
### 2) Create Palette Interface
// 
const palette: IPalette = {
  color,
  // ...
  // ...
  // ...
}
```
### 4) Initialize Styled Component Type
- Types/style/style-type.ts
- Vs code will offer suggestions for child properties that are part of the component styles
- Vs code will lint properties that do not belong or are undefined
```ts
// * Create a type interface for components to have consistency in changing from one color palette to another ex: darkMode -> lightMode
  interface IComponentStyle {
    background?: string,
    backgroundColor?: string
    borderRadius?: string,
    boxShadow?: string,
    "&:active"?: object
  }
```
### 5) Initialize Global Style Type
- Types/style/style-type.ts
- Vs code will offer suggestions for child properties that are part of the component styles
- Vs code will lint properties that do not belong or are undefined
- This should contain the palette property and all styled component properties
```ts
  interface IGlobalStyle  {
    palette: IPalette,
    // Include the global pallete for inline styles later on
    actionButton: IComponentStyle,
    // Include custom components that will be used with different color palettes
        //  - Assures each palette contains all components used in other palettes

   }
  export {
    palette,
    type ICustomStyle
  };
```

## Create/Edit The Main Global Styles
- Style/globalStyling/styleSheets/Main-style.ts
```ts
import {
    palette,
    ICustomStyle
} from './palette';


export const MainStyle: ICustomStyle = {
    palette:{
        ...palette
    },
    actionButton: {
      background: gradient.buttonDark,
      borderRadius: '20px',
      boxShadow: boxShadow.main,
      "&:active":{ 
        background: gradient.buttonLight,
        borderRadius: '20px',
        boxShadow: boxShadow.main
      }
    },
   
}
```
## Create/Edit Alternate Global Styles
- Style/globalStyling/styleSheets/darkMode-style.ts
- Destructire the main style into the alternate style object
- Overwrite component styles underneath 
```ts
import {
    palette,
    ICustomStyle
} from './palette';

export const darkMode: ICustomStyle = {
  ...MainStyle,

    actionButton: {
      background: gradient.buttonLight,
      borderRadius: '20px',
      boxShadow: boxShadow.contrast,
      "&:active":{ 
        background: gradient.buttonDark,
        borderRadius: '20px',
        boxShadow: boxShadow.contrast
      }
    },
   
}
```

## Style The Component Library
- Style/styledComponents/main.ts
```ts
import { useSelector } from "../../Types/redux/selector-type";

export const ActionButton = ({
  onClick,
  name,
  style,
  children = null,
}: {
  onClick: () => void;
  name: string;
  style: object,
  children?: React.ReactNode;
}) => {
  const { actionButton } = useSelector((state) => state.style.styleSheet);

  return (
    <>
      <button className={name} onClick={onClick} style={{...actionButton, ...style}}>
        {children}
      </button>
    </>
  );
};

```




