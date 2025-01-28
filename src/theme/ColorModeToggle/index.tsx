import React, { useEffect } from "react";
import ColorModeToggle from "@theme-original/ColorModeToggle";
import { useColorScheme } from "@mui/material/styles";

interface ColorModeToggleWrapperProps {
  value: 'light' | 'dark';
}

const ColorModeToggleWrapper: React.FC<ColorModeToggleWrapperProps> = (props) => {
  const { setMode } = useColorScheme();

  const { value } = props;

  useEffect(() => {
    setMode(value);
  }, [value, setMode]);

  return (
    <>
      <ColorModeToggle {...props} />
    </>
  );
}

export default ColorModeToggleWrapper;