import React from 'react';
import { useState, createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
export const ColorModeContext = createContext();

// we always get children in react functions as props
const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState('light');
  // a hook which will change only when the mode changes just like useEffect. i.e useMemo
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
