import React, { useState, useEffect } from "react";
import { Link, Route } from "wouter";

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
import NyTimesWorld from "./pages/NyTimesWorld";
import EspnF1 from "./pages/EspnF1";

function App() {
  const [api, setApi] = useState("NyTimes");

  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="sticky-nav" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="https://www.nytimes.com/" target="_blank">
              New York Times
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="nav-link">
                  <Link href="/nytimes">Times Top stories</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/nytimes/moviereviews">Times Movie reviews</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/nytimes/worldnews">Times World news</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/nytimes/bookreviews">Times Book reviews</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/nytimes/formula1">Times Formula 1</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/espn/f1">Espn Formula 1</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/newyorker">New Yorker</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/wired/science">Wired science</Link>
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
        <Route path="/nytimes" component={NyTimes}></Route>
        <Route path="/nytimes/worldnews" component={NyTimesWorld}></Route>
        <Route path="/nytimes/moviereviews" component={NyTimesMovieReviews}></Route>
        <Route path="/nytimes/bookreviews" component={NyTimesBookReviews}></Route>
        <Route path="/nytimes/formula1" component={NyTimesFormula1}></Route>
        
        <Route path="/espn/f1" component={EspnF1}></Route>
        <Route path="/newyorker" component={NewYorkerRss}></Route>
        <Route path="/wired/science" component={WiredScienceRss}></Route>

      </body>
    </div>
  );
}

export default App;
