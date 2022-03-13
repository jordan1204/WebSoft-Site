import React from 'react';
import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";
import PageLayout from "./Layout/PageLayout";
import Home from './Home/Index';
import Delegation from './Home/Delegation/Index.js';
import About from './About/Index';
import TechApplication from './TechApplication/Index.js';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline enableColorScheme/>
      <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/techapplication" element={<TechApplication />} />
            <Route path="/Delegation" element={<Delegation/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
