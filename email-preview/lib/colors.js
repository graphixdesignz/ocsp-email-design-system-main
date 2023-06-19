export const brights = [
    "#0096D6",
    "#00D072",
    "#4759F5",
    "#549EF7",
    "#40DEFA",
    "#4EF5AB",
    "#83F955",
    "#D3FB66",
    "#B655F5",
    "#A89EFA",
    "#FF63BB",
    "#FF84FF",
    "#FF876B",
    "#FF8900",
    "#FFBD3B",
    "#FFE137",
    "#FCF54B",
];

export const darks = ["#666454", "#856630", "#212248", "#000000"];

export const primary = "#000000";
export const inverse = "#FFFFFF";

export const cream = "#F2EBDC";
export const grey = "#E6E6E6";
export const greyLight = "#F0F0F0";

export const link = "#0096D6";

export const white = "#FFFFFF";

export const interactive = "#4DB6E2";

export const footer = "#949287";

export const colorWays = {
    // what's all this then?
    //
    // to make it easy to swap out color-ways with defaults
    // and vice versa, it's nice to just extract colors from an array once, vs having
    // a lot of conditional logic reading "if color then x else y" all
    // over a template. If we follow this, slightly silly, convention, for
    // components that are all grey or white or have black text by default we can do
    // the following just once...
    // const [primary, secondary, tertiary, quartenary] = colorWays[color];
    // and and use the variables as needed, where needed without worrying about their contents.
    black: [primary, primary, primary, primary],
    white: [white, white, white, white],
    grey: [grey, grey, grey, grey],
    blue: ["#4DB6E2", "#80CAEA", "#99D5EF", "#CCEAF7"],
    lavender: ["#7E8BF8", "#A3ACFA", "#B5BDFB", "#DADEFD"],
    green: ["#4DDE9C", "#80E7B8", "#99ECC7", "#CCF6E3"],
    purple: ["#CC88F8", "#DAAAFA", "#E2BBFB", "#F0DDFD"],
    pink: ["#FF82C9", "#FFB1DD", "#FFC1E4", "#FFE0F1"],
};
