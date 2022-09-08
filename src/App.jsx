import React, { useState, useEffect } from "react";
import { Router, Link, useLocation } from "wouter";
// import PageRouter from "./components/router";

// import { useRoutes } from "hookrouter"
// import Routes from './components/router'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NyTimes from "./pages/NyTimes";
import NyTimesMovieReviews from "./pages/NyTimesMovieReviews";
import NyTimesBookReviews from "./pages/NyTimesBookReviews";
import NyTimesFormula1 from "./pages/NyTimesFormula1";
import NewYorkerRss from "./pages/NewYorkerRss";
import WiredScienceRss from "./pages/WiredScienceRss";

function App() {
  const [api, setApi] = useState("NyTimes");
  const [location, setLocation] = useLocation()

  function handleClick(str) {
    if (str === "NyTimesMovieReviews") {
      setLocation('/nytimes/moviereviews')
      setApi("NyTimesMovieReviews");
    } else if (str === "NyTimes") {
      setLocation('/nytimes')
      setApi("NyTimes");
    } else if (str === "NyTimesBookReviews") {
      setLocation('/nytimes/bookreviews')
      setApi("NyTimesBookReviews");
    } else if (str === "NyTimesFormula1") {
      setLocation('/nytimes/formula1')
      setApi("NyTimesFormula1");
    } else if (str === "NewYorkerRss") {
      setLocation('/newyorker')
      setApi("NewYorkerRss");
    } else if (str === "WiredScienceRss") {
      setLocation('/wired/science')
      setApi("WiredScienceRss");
    }
    else if (str === 'ScientificAmericanRss') {
      setApi('ScientificAmericanRss')
    }
  }
  
  // const routeResult = useRoutes(Routes)

  return (
    <div className="App">
        <header className="App-header">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="https://www.nytimes.com/" target="_blank">
                New York Times
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    className="nav-link" 
                    onClick={() => handleClick("NyTimes")}
                    // href="/"
                  >
                    Top stories
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link"
                    onClick={() => handleClick("NyTimesMovieReviews")}
                    //href="/nytimesmoviereviews"
                  >
                    Movie reviews
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link"
                    onClick={() => handleClick("NyTimesBookReviews")}
                    // href="/nytimesbookreviews"
                  >
                    Book reviews
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link"
                    onClick={() => handleClick("NyTimesFormula1")}
                  >
                    Formula 1
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link"
                    onClick={() => handleClick("NewYorkerRss")}
                  >
                    New Yorker
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link"
                    onClick={() => handleClick("WiredScienceRss")}
                  >
                    Wired science
                  </Nav.Link>
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <body>
          <>
            {api === "NyTimes" && <NyTimes />}
            {api === "NyTimesMovieReviews" && <NyTimesMovieReviews />}
            {api === "NyTimesBookReviews" && <NyTimesBookReviews />}
            {api === "NyTimesFormula1" && <NyTimesFormula1 />}
            {api === "NewYorkerRss" && <NewYorkerRss />}
            {api === "WiredScienceRss" && <WiredScienceRss />}
            {/* {api === 'ScientificAmericanRss' && <ScientificAmericanRss />} */}
          </>
        </body>
    </div>
  );
}

export default App;
