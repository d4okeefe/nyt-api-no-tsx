import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link, Redirect, Route } from 'wouter'
import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import EspnF1 from './pages/EspnF1'
import EspnNBA from './pages/EspnNBA'
import EspnTennis from './pages/EspnTennis'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import NewYorkerRss from './pages/NewYorkerRss'
import NodeWeeklyRss from './pages/NodeWeeklyRss'
import NyTimesFormula1 from './pages/NyTimesFormula1'
import NyTimesMovieReviews from './pages/NyTimesMovieReviews'
import NyTimesNews from './pages/NyTimesNews'
import WaPoNews from './pages/WaPoNews'
import WiredScienceRss from './pages/WiredScienceRss'

function App() {
  const title = 'Test run'
  const nyt_api_key = 'O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw'
  const [api, setApi] = useState('NyTimes')

  const Nav_NyTimesDropdown = (
    <NavDropdown title="New York Times" id="basic-nav-dropdown">
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
  )
  const Nav_WaPoDropdown = (
    <NavDropdown title="Washington Post" id="basic-nav-dropdown">
      <NavDropdown.Item>
        <Link href="/wapo/politics">Politics</Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link href="/wapo/opinions">Opinions</Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link href="/wapo/world">World</Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link href="/wapo/technology">Tech News</Link>
      </NavDropdown.Item>
    </NavDropdown>
  )
  const Nav_EspnDropdown = (
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
  )

  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="sticky-nav" bg="light" expand="lg">
          <Container>
            <Navbar.Brand>News links</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {Nav_NyTimesDropdown}
                {Nav_WaPoDropdown}
                <Nav.Link className="nav-link">
                  <Link href="/newyorker">New Yorker</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/wired/science">Wired science</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/nodeweekly">Node Weekly</Link>
                </Nav.Link>
                {/*
                <Nav.Link className="nav-link">
                  <Link href="/scientificamerican">Scientific American</Link>
                </Nav.Link>
                */}
                {Nav_EspnDropdown}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <body>
        <Redirect to="/nytimes/bookreviews"></Redirect>
        <Route path="/nytimes">
          <NyTimesNews
            title="N.Y. Times Top Stories"
            api_key={nyt_api_key}
            url="home.json"
          />
        </Route>
        <Route path="/nytimes/opinion">
          <NyTimesNews
            title="N.Y. Times Opinions"
            api_key={nyt_api_key}
            url="opinion.json"
          />
        </Route>
        <Route path="/nytimes/science">
          <NyTimesNews
            title="N.Y. Times Science"
            api_key={nyt_api_key}
            url="science.json"
          />
        </Route>
        <Route path="/nytimes/sports">
          <NyTimesNews
            title="N.Y. Times Sports"
            api_key={nyt_api_key}
            url="sports.json"
          />
        </Route>
        <Route path="/nytimes/worldnews">
          <NyTimesNews
            title="N.Y. Times World News"
            api_key={nyt_api_key}
            url="world.json"
          />
        </Route>

        <Route path="/nytimes/bookreviews">
          <NyTimesNews
            title="N.Y. Times Books"
            api_key={nyt_api_key}
            url="books.json"
          />
        </Route>

        <Route path="/nytimes/formula1">
          <NyTimesFormula1 title="N.Y. Times Formua 1" api_key={nyt_api_key} />
        </Route>
        <Route path="/nytimes/moviereviews">
          <NyTimesMovieReviews
            title="N.Y. Times movie reviews"
            api_key={nyt_api_key}
          />
        </Route>

        <Route path="/wapo/politics">
          <WaPoNews title="Washington Post Politics" url="politics" />
        </Route>
        <Route path="/wapo/opinions">
          <WaPoNews title="Washington Post Opinions" url="opinions" />
        </Route>
        <Route path="/wapo/world">
          <WaPoNews title="Washington Post World News" url="world" />
        </Route>
        <Route path="/wapo/technology">
          <WaPoNews
            title="Washington Post Tech News"
            url="business/technology"
          />
        </Route>

        <Route path="/newyorker">
          <NewYorkerRss title="New Yorker" />
        </Route>
        <Route path="/nodeweekly">
          <NodeWeeklyRss title="Node Weekly" />
        </Route>

        <Route path="/wired/science">
          <WiredScienceRss title="Wired.com science" />
        </Route>

        <Route path="/espn/f1">
          <EspnF1 title="Espn Formula 1" />
        </Route>
        <Route path="/espn/NBA">
          <EspnNBA title="Espn NBA" />
        </Route>
        <Route path="/espn/tennis">
          <EspnTennis title="Espn Tennis" />
        </Route>
      </body>
    </div>
  )
}

export default App
