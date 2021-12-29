import logo from './logo.svg';
import './App.css';
import CRUDnav from './components/nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
// import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
// import { amber, deepOrange, grey } from '@mui/material/colors';

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     primary: {
//       ...amber,
//       ...(mode === 'dark' && {
//         main: amber[300],
//       }),
//     },
//     ...(mode === 'dark' && {
//       background: {
//         default: deepOrange[900],
//         paper: deepOrange[900],
//       },
//     }),
//     text: {
//       ...(mode === 'light'
//         ? {
//             primary: grey[900],
//             secondary: grey[800],
//           }
//         : {
//             primary: '#fff',
//             secondary: grey[500],
//           }),
//     },
//   },
// });

function App() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.default',
      color: 'text.primary',
      borderRadius: 1,
      p: 3,
    }}>    
    < CRUDnav />
    </Box>
  );
}

export default App;
