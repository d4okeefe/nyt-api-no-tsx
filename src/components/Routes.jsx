import { Redirect, Route } from 'wouter'

import EspnNews from '../pages/EspnNews'
import NatureRss from '../pages/NatureRss'
import NewYorkerRss from '../pages/NewYorkerRss'
import NyTimesFormula1 from '../pages/NyTimesFormula1'
import NyTimesNews from '../pages/NyTimesNews'
import ScientificAmericanRss from '../pages/ScientificAmericanRss'
import WaPoNews from '../pages/WaPoNews'
import WiredScienceRss from '../pages/WiredScienceRss'

const nyt_api_key = 'O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw'

export default () => {
  return (
    <>
      <Redirect to="/nytimes"></Redirect>

      {/* NY TIMES ROUTES */}
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
          title="N.Y. Times Formula 1"
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

      {/* WASHINGTON POST ROUTES */}
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
        <WaPoNews title="Washington Post Tech News" url="business/technology" />
      </Route>

      {/* SINGLE PAGE ROUTES */}
      <Route path="/newyorker">
        <NewYorkerRss title="New Yorker" />
      </Route>
      <Route path="/scientificamerican">
        <ScientificAmericanRss title="Scientific American" />
      </Route>

      <Route path="/wired/science">
        <WiredScienceRss title="Wired.com science" />
      </Route>
      <Route path="/nature">
        <NatureRss title="Nature" />
      </Route>

      {/* ESPN ROUTES */}
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
    </>
  )
}
