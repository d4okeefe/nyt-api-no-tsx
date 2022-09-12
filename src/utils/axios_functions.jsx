import axios from 'axios'

const axios_functions = {
  axios_nyt_top_stories: function () {
    axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw`,
    )
  },

  axios_nyt_book_reviews: function () {
    axios.get(
      `https://api.nytimes.com/svc/topstories/v2/books.json?api-key=O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw`,
    )
  },

  axios_nyt_formula_one: function () {
    axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw`,
    )
  },

  axios_nyt_movie_reviews: function () {
    axios.get(
      `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw`,
    )
  },

  axios_nyt_opinion: function () {
    axios.get(
      `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw`,
    )
  },

  axios_nyt_science: function () {
    axios.get(
      `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw`,
    )
  },

  axios_nyt_sports: function () {
    axios.get(
      `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw`,
    )
  },

  axios_nyt_world: function () {
    axios.get(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw`,
    )
  },
}
