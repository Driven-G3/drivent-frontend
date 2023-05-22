import * as React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/styles/';
import { createTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      contrastText: '#fff',
    },
  },
});

export default function CustomColor() {
  return (
    <ThemeProvider theme={theme}>
      <Button color='primary'  variant="contained">
        neutral
      </Button>
    </ThemeProvider>
  );
}
