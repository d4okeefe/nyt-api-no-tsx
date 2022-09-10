import React, { useState, useEffect } from "react";
import { Link, Route } from "wouter";

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
import NyTimesOpinion from "./pages/NyTimesOpinion";
import NyTimesScience from "./pages/NyTimesScience";
import NyTimesSports from "./pages/NyTimesSports";
// import ScientificAmericanRss from "./pages/ScientificAmericanRss";
import EspnF1 from "./pages/EspnF1";
import EspnNBA from "./pages/EspnNBA";
import EspnTennis from "./pages/EspnTennis";

function App() {
  const [title, setTitle] = useState("N.Y. Times top stories");
  const [api, setApi] = useState("NyTimes");

  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="sticky-nav" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#" /* "https://www.nytimes.com/" */ target="_blank">
              News links
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="NY Times" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/nytimes">Top stories</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/nytimes/worldnews">World news</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/nytimes/science">Science</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/nytimes/opinion">Opinions</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/nytimes/sports">Sports</Link>
                  </NavDropdown.Item>                  
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link href="/nytimes/bookreviews">Book reviews</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/nytimes/moviereviews">Movie reviews</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/nytimes/formula1">Formula 1</Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="nav-link">
                  <Link href="/newyorker">New Yorker</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/wired/science">Wired science</Link>
                </Nav.Link>
                {/*
                <Nav.Link className="nav-link">
                  <Link href="/scientificamerican">Scientific American</Link>
                </Nav.Link>
                */}
                <NavDropdown title="Espn" id="basic-nav-dropdown">
                  <NavDropdown.Item className="nav-link">
                    <Link href="/espn/f1">Formula 1</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="nav-link">
                    <Link href="/espn/nba">NBA</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="nav-link">
                    <Link href="/espn/tennis">Tennis</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <body>
        <Route path="/" 
            component={
              <NyTimes title={title} />
          }
        />
        <Route path="/nytimes" component={NyTimes} />
        <Route path="/nytimes/worldnews" component={NyTimesWorld} />
        <Route path="/nytimes/opinion" component={NyTimesOpinion} />
        <Route path="/nytimes/sports" component={NyTimesSports} />
        <Route path="/nytimes/science" component={NyTimesScience} />
        <Route path="/nytimes/moviereviews" component={NyTimesMovieReviews} />
        <Route path="/nytimes/bookreviews" component={NyTimesBookReviews} />
        <Route path="/nytimes/formula1" component={NyTimesFormula1} />

        {/* <Route path="/scientificamerican" component={ScientificAmericanRss} /> */}
        <Route path="/newyorker" component={NewYorkerRss} />
        <Route path="/wired/science" component={WiredScienceRss} />

        <Route path="/espn/f1" component={EspnF1} />
        <Route path="/espn/NBA" component={EspnNBA} />
        <Route path="/espn/tennis" component={EspnTennis} />
      </body>
    </div>
  );
}

export default App;
