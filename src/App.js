import Landing from './pages/landing';
import Menu from './pages/Menu';
import Video from './pages/Video';
import About from './pages/components/About';
import Contact from './pages/Contact';
import AboutPGP from './pages/components/programmes/PGP/AboutPGP';
import NavBox from './pages/components/programmes/PGP/NavBox';
import Footer from './pages/Footer';
import { ChakraProvider, extendTheme, Button, Box } from "@chakra-ui/react"
import {Fonts} from './Fonts'
import './App.css';
import p5 from 'p5';
import Sketch from "react-p5";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect    
} from "react-router-dom";
import React, { useEffect } from 'react';

const theme = extendTheme({
  fonts: {
    body: 'Montserrat',
  },
})

function App() {

  return (
    <>
    {/* <Sketch setup={setup} draw={draw}/> */}
    <Router >
      
      <ChakraProvider theme={theme}>
      
        
          <Fonts/>
          
          <Switch>
            <Route exact path="/">
              <div className="App">
                
                <Landing/>
                </div>
            </Route>
            <Route path="/menu">
              
                <Menu />
              
            </Route>
            <Route path="/video">
              
                <Video />
              
            </Route>
            <Route path="/about">
              
                <About />
              
            </Route>
            <Route path="/pgp">
              <NavBox/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
          
      </ChakraProvider>
      
    </Router>
    {/* <Footer/> */}
    </>
  );
}

export default App;
