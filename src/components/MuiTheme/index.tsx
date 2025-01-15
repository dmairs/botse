import { extendTheme, Theme } from "@mui/material/styles";

const extTheme: Theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "hsl(240, 48%, 47%)",
        },
        background: {
          paper: "hsl(240, 15%, 95%)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "hsl(240, 90%, 70%)",
        },
        background: {
          paper: "hsl(210, 3%, 15%)",
        },
      },
    },
  },
  colorSchemeSelector: "class", // use class for toggling color mode
});

export default extTheme;