import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link, Redirect, Route } from 'wouter'
import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import EspnNews from './pages/EspnNews'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NewYorkerRss from './pages/NewYorkerRss'
import NewsNavDropDown from './utils/NewsNavDropDown'
import NyTimesFormula1 from './pages/NyTimesFormula1'
import NyTimesNews from './pages/NyTimesNews'
import ScientificAmericanRss from './pages/ScientificAmericanRss'
import WaPoNews from './pages/WaPoNews'
import WiredScienceRss from './pages/WiredScienceRss'

function App() {
  const title = 'Test run'
  const nyt_api_key = 'O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw'
  const [api, setApi] = useState('NyTimes')

  return (
    <div className="App">
      <header className="App-header bg-dark">
        <Navbar className="text-white bg-dark " expand="lg">
          <Container>
            <Navbar.Brand className="text-white">News links</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="text-white" id="basic-navbar-nav">
              <Nav className="text-white me-auto">
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
                <NewsNavDropDown
                  title="Washington Post"
                  items={[
                    { link: '/wapo/politics', title: 'Politics' },
                    { link: '/wapo/opinions', title: 'Opinions' },
                    { link: '/wapo/world', title: 'World' },
                    { link: '/wapo/technology', title: 'Tech News' },
                  ]}
                />

                <Nav.Link className="nav-link">
                  <Link href="/newyorker">New Yorker</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/wired/science">Wired science</Link>
                </Nav.Link>
                <Nav.Link className="nav-link">
                  <Link href="/scientificamerican">Scientific American</Link>
                </Nav.Link>
                {/*
                <Nav.Link className="nav-link">
                  <Link href="/scientificamerican">Scientific American</Link>
                </Nav.Link>
                */}
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
        <Redirect to="/nytimes"></Redirect>
        <Route path="/nytimes">
          <NyTimesNews
            title="N.Y. Times Top Stories"
            api_key={nyt_api_key}
            url="topstories/v2/home.json"
            source="topstories"
          />
        </Route>
        <Route path="/nytimes/opinion">
          <NyTimesNews
            title="N.Y. Times Opinions"
            api_key={nyt_api_key}
            url="topstories/v2/opinion.json"
            source="topstories"
          />
        </Route>
        <Route path="/nytimes/science">
          <NyTimesNews
            title="N.Y. Times Science"
            api_key={nyt_api_key}
            url="topstories/v2/science.json"
            source="topstories"
          />
        </Route>
        <Route path="/nytimes/sports">
          <NyTimesNews
            title="N.Y. Times Sports"
            api_key={nyt_api_key}
            url="topstories/v2/sports.json"
            source="topstories"
          />
        </Route>
        <Route path="/nytimes/worldnews">
          <NyTimesNews
            title="N.Y. Times World News"
            api_key={nyt_api_key}
            url="topstories/v2/world.json"
            source="topstories"
          />
        </Route>

        <Route path="/nytimes/bookreviews">
          <NyTimesNews
            title="N.Y. Times Books"
            api_key={nyt_api_key}
            url="topstories/v2/books.json"
            source="topstories"
          />
        </Route>

        <Route path="/nytimes/moviereviews">
          <NyTimesNews
            title="N.Y. Times Movie Reviews"
            api_key={nyt_api_key}
            url="movies/v2/reviews/picks.json"
            source="movies"
          />
        </Route>

        <Route path="/nytimes/formula1">
          <NyTimesNews
            title="N.Y. Times Formua 1"
            api_key={nyt_api_key}
            url="search/v2/articlesearch.json"
            source="article_search"
            query="Formula-1"
          />
        </Route>
        {/* /search/v2/articlesearch.json */}
        {/* <Route path="/nytimes/formula1">
          <NyTimesFormula1 title="N.Y. Times Formua 1" api_key={nyt_api_key} />
        </Route> */}
        {/* <Route path="/nytimes/moviereviews">
          <NyTimesMovieReviews
            title="N.Y. Times movie reviews"
            api_key={nyt_api_key}
          />
        </Route> */}

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
        <Route path="/scientificamerican">
          <ScientificAmericanRss title="Scientific American" />
        </Route>

        <Route path="/wired/science">
          <WiredScienceRss title="Wired.com science" />
        </Route>

        <Route path="/espn/mlb">
          <EspnNews title="Espn Baseball" url="mlb/news" />
        </Route>
        <Route path="/espn/f1">
          <EspnNews title="Espn Formula 1" url="f1/news" />
        </Route>
        <Route path="/espn/NBA">
          <EspnNews title="Espn NBA" url="nba/news" />
        </Route>
        <Route path="/espn/tennis">
          <EspnNews title="Espn Tennis" url="tennis/news" />
        </Route>

        <Route path="/espn/soccer">
          <EspnNews title="Espn Soccer" url="soccer/news" />
        </Route>
        <Route path="/espn/nfl">
          <EspnNews title="Espn NFL" url="nfl/news" />
        </Route>
      </body>
    </div>
  )
}

export default App
