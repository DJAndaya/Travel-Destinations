import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./redux/store.js"
import Root from "./routes/Root.jsx"
import ListOfCountries from './components/ListOfCountries.jsx';
import Settings from './components/Settings';
import CreateLogin from './components/CreateLogin';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <ListOfCountries />
      },
      {
        path: "/settings",
        element: <Settings />
      },
      {
        path: "/signin",
        element: <CreateLogin />
      }
    ]
  },
]);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </ThemeProvider>
  // </React.StrictMode>,
)
