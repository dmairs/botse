import React, { ReactNode } from "react";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@site/src/components/MuiTheme";

interface RootProps {
  children: ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <>
      <InitColorSchemeScript />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

export default Root;