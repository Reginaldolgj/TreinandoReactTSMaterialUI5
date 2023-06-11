import { createTheme } from '@mui/material';
import { green, purple } from '@mui/material/colors';

export const LightTheme = createTheme({
	palette: {
		primary: {
			main: green[700],
			dark: green[800],
			light: green[500],
			contrastText: '#ffffff',
		},
		secondary: {
			main: purple[500],
			dark: purple[400],
			light: purple[300],
			contrastText: '#ffffff',
		},
		background: {
			default: '#f7f6f3',
			paper: '#ffffff',
		}
	}
});