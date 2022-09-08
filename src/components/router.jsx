import React, { Switch, Route } from 'wouter'
import NyTimes from '../pages/NyTimes'
import NyTimesMovieReviews from '../pages/NyTimesMovieReviews'
import NyTimesBookReviews from '../pages/NyTimesBookReviews'

export default () => (
  <Switch>
    <Route path="/" component={NyTimes} />
    <Route path="/nytimesmoviereviews/" component={NyTimesMovieReviews} />
    <Route path="/nytimesbookreviews/" component={NyTimesBookReviews} />
  </Switch>
)