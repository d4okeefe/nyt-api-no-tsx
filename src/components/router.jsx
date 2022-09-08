import React, { Switch, Route } from 'wouter'
import NyTimes from '../NyTimes'
import NyTimesMovieReviews from '../NyTimesMovieReviews'
import NyTimesBookReviews from '../NyTimesBookReviews'

export default () => (
  <Switch>
    <Route path="/" component={NyTimes} />
    <Route path="/nytimesmoviereviews/" component={NyTimesMovieReviews} />
    <Route path="/nytimesbookreviews/" component={NyTimesBookReviews} />
  </Switch>
)