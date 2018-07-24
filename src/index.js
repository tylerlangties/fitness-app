import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { /*...*/ MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: orange
  }
})

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
     <App />
    </MuiThemeProvider>, document.getElementById('root'));
