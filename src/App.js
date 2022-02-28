import React from 'react';
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
import Home from './Home/Index.js';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline enableColorScheme/>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={ <Home/>}/>
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
