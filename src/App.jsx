import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import { Link } from 'wouter'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import NewsNavDropDown from './utils/NewsNavDropDown'
import Routes from './components/Routes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>News links</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NewsNavDropDown
                  title="New York Times"
                  items={[
                    { link: '/nytimes', title: 'Top Stories' },
                    { link: '/nytimes/worldnews', title: 'World News' },
                    { link: '/nytimes/science', title: 'Science' },
                    { link: '/nytimes/opinion', title: 'Opinions' },
                    { link: '/nytimes/sports', title: 'Sports' },
                    { link: '/nytimes/bookreviews', title: 'Books' },
                    { link: '/nytimes/moviereviews', title: 'Movie Reviews' },
                    { link: '/nytimes/formula1', title: 'Formula 1' },
                  ]}
                />
              </Nav>
              <Nav>
                <NewsNavDropDown
                  title="Washington Post"
                  items={[
                    { link: '/wapo/politics', title: 'Politics' },
                    { link: '/wapo/opinions', title: 'Opinions' },
                    { link: '/wapo/world', title: 'World' },
                    { link: '/wapo/technology', title: 'Tech News' },
                  ]}
                />{' '}
              </Nav>
              <Nav>
                <Nav.Link className="nav-link" href="/newyorker">
                  New Yorker
                  {/* <Link href="/newyorker">New Yorker</Link> */}
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/wired/science">Wired science</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/scientificamerican">Scientific American</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/nature">Nature</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <NewsNavDropDown
                  title="Espn"
                  items={[
                    { link: '/espn/nba', title: 'NBA' },
                    { link: '/espn/mlb', title: 'Baseball' },
                    { link: '/espn/soccer', title: 'Soccer' },
                    { link: '/espn/f1', title: 'Formula 1' },
                    { link: '/espn/tennis', title: 'Tennis' },
                    { link: '/espn/nfl', title: 'NFL' },
                  ]}
                />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <body className="text-light bg-dark">
        <Routes />
      </body>
    </div>
  )
}

export default App
