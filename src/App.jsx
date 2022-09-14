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
import NyTimes from './pages/NyTimes'
import NyTimesBookReviews from './pages/NyTimesBookReviews'
import NyTimesFormula1 from './pages/NyTimesFormula1'
import NyTimesMovieReviews from './pages/NyTimesMovieReviews'
import NyTimesOpinion from './pages/NyTimesOpinion'
import NyTimesScience from './pages/NyTimesScience'
import NyTimesSports from './pages/NyTimesSports'
import NyTimesWorld from './pages/NyTimesWorld'
import WaPoOpinions from './pages/WaPoOpinions'
import WaPoPolitics from './pages/WaPoPolitics'
import WaPoSports from './pages/WaPoSports'
//import ScientificAmericanRss from "./pages/ScientificAmericanRss";
import WiredScienceRss from './pages/WiredScienceRss'

function App() {
  const title = 'Test run'
  const nyt_api_key = 'O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw'
  const [api, setApi] = useState('NyTimes')

  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="sticky-nav" bg="light" expand="lg">
          <Container>
            <Navbar.Brand>News links</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
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

                <NavDropdown title="Washington Post" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/wapo/politics">Politics</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/wapo/opinions">Opinions</Link>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item>
                    <Link href="/wapo/sports">Sports</Link>
                  </NavDropdown.Item>                   */}
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
        <Redirect to="/nytimes"></Redirect>
        <Route path="/nytimes">
          <NyTimes title="N.Y. Times top stories" api_key={nyt_api_key} />
        </Route>
        <Route path="/nytimes/bookreviews">
          <NyTimesBookReviews
            title="N.Y. Times book reviews"
            api_key={nyt_api_key}
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
        <Route path="/nytimes/opinion">
          <NyTimesOpinion title="N.Y. Times opinions" api_key={nyt_api_key} />
        </Route>
        <Route path="/nytimes/science">
          <NyTimesScience title="N.Y. Times science" api_key={nyt_api_key} />
        </Route>
        <Route path="/nytimes/sports">
          <NyTimesSports title="N.Y. Times sports" api_key={nyt_api_key} />
        </Route>
        <Route path="/nytimes/worldnews">
          <NyTimesWorld title="N.Y. Times world news" api_key={nyt_api_key} />
        </Route>

        <Route path="/wapo/politics">
          <WaPoPolitics title="Washington Post Politics" />
        </Route>
        <Route path="/wapo/opinions">
          <WaPoOpinions title="Washington Post Opinions" />
        </Route>
        <Route path="/wapo/sports">
          <WaPoSports title="Washington Post Sports" />
        </Route>

        <Route path="/newyorker">
          <NewYorkerRss title="New Yorker" />
        </Route>

        <Route path="/wired/science">
          <WiredScienceRss title="Wired.com science" />
        </Route>

        {/* <Route path="/scientificamerican" component={ScientificAmericanRss} /> */}

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
