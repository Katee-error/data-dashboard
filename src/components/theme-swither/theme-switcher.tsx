
import React from 'react';
import { IconButton, useColorScheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeSwitcher: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null; 
  }

  return (
    <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit">
      {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};


