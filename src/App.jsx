import React, { useState, useEffect } from "react";
import { Link, Route, Redirect } from "wouter";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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

                <NavDropdown title="NY Times" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/nytimes">Top stories</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/nytimes/worldnews">World news</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link href="/nytimes/bookreviews">Book reviews</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/nytimes/formula1">Formula 1</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="nav-link">
                    <Link href="/newyorker">New Yorker</Link>
                  </NavDropdown.Item>
                  <Nav.Link className="nav-link">
                    <Link href="/wired/science">Wired science</Link>
                  </Nav.Link>
                  <Nav.Link className="nav-link">
                    <Link href="/espn/f1">Espn Formula 1</Link>
                  </Nav.Link>
                </NavDropdown>

                <NavDropdown
                  title="NY Times"
                  id="basic-nav-dropdown"
                ></NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <body>
        <Route path="/" component={NyTimes} />
        <Route path="/nytimes" component={NyTimes} />
        <Route path="/nytimes/worldnews" component={NyTimesWorld} />
        <Route path="/nytimes/moviereviews" component={NyTimesMovieReviews} />
        <Route path="/nytimes/bookreviews" component={NyTimesBookReviews} />
        <Route path="/nytimes/formula1" component={NyTimesFormula1} />

        <Route path="/espn/f1" component={EspnF1} />
        <Route path="/newyorker" component={NewYorkerRss} />
        <Route path="/wired/science" component={WiredScienceRss} />
      </body>
    </div>
  );
}

export default App;
