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
import CustomHelmet from './CustomHelmet';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-223362754-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <React.Fragment>
      <CustomHelmet/>
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
