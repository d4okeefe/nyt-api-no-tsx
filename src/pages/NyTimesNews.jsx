import React, { useEffect, useState } from 'react'
import { format_date, within_six_months } from '../utils/FormatDate'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import NewsCard from '../utils/NewsCard'
import Row from 'react-bootstrap/Row'
import axios from 'axios'

export default (props) => {
  const [data, setData] = useState([])

  //  https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw

  const nyt_topstories_axios = axios.create({
    baseURL: `https://api.nytimes.com/svc/`,
    timeout: 30000,
  })

  const nyt_url_ending = props.url

  useEffect(() => {
    if ('query' in props) {
      nyt_topstories_axios
        .get(nyt_url_ending, {
          params: {
            q: props.query,
            'api-key': props.api_key,
          },
        })
        .then((response) => {
          // const curr_response = response.data.results
          // const shuffle = curr_response.sort((a, b) => Math.random() - 0.5)
          // setData(shuffle)
          setData(response.data.response.docs)
        })
    } else {
      nyt_topstories_axios
        .get(nyt_url_ending, {
          params: {
            'api-key': props.api_key,
          },
        })
        .then((response) => {
          const curr_response = response.data.results
          const shuffle = curr_response.sort((a, b) => Math.random() - 0.5)
          setData(shuffle)
        })
    }
  }, [])

  return (
    <div className="container NyTimesTable">
      <h4 className="title-header">{props.title}</h4>
      <Row xs={1} md={1} lg={2}>
        {data
          .filter((r) => {
            if ('title' in r) return !(r.title.trim() === '')
            if ('headline' in r) return !(r.headline.main.trim() === '')
          })
          // .filter((r) => {
          //   if ('published_date' in r) {
          //     return (
          //       new Date().getFullYear() -
          //         new Date(r.published_date.replace('T', ' ')).getFullYear() <=
          //       2
          //     )
          //   }
          //   if ('date_updated' in r) {
          //     return (
          //       new Date().getFullYear() -
          //         new Date(r.date_updated.replace('T', ' ')).getFullYear() <=
          //       2
          //     )
          //   }
          //   if ('pub_date' in r) {
          //     return (
          //       new Date().getFullYear() -
          //         new Date(r.pub_date.replace('T', ' ')).getFullYear() <=
          //       2
          //     )
          //   }
          // })
          .map((r, index) => (
            <Col key={index}>
              {props.source === 'topstories' && (
                <NewsCard
                  image_url={r.multimedia && r.multimedia[0].url}
                  image_caption={r.multimedia && r.multimedia[0].caption}
                  url={r.url && r.url}
                  title={r.title}
                  description={r.abstract}
                  byline={r.byline}
                  date={format_date(r.published_date)}
                />
              )}
              {props.source === 'movies' && (
                <NewsCard
                  image_url={r.multimedia.src}
                  image_caption=""
                  url={r.link.url}
                  title={r.headline}
                  description={r.summary_short}
                  byline={r.byline}
                  date={format_date(r.date_updated)}
                />
              )}
              {props.source === 'article_search' && (
                <NewsCard
                  image_url=""
                  image_caption=""
                  url={r.web_url}
                  title={r.headline.main}
                  description={r.lead_paragraph}
                  byline={r.byline.original}
                  date={format_date(r.pub_date)}
                />
              )}
              {/* {props.source === 'article_search' && (
                <NewsCard
                  image_url=""
                  image_caption=""
                  url={r.web_url}
                  title={r.headline.main}
                  description=""
                  byline={r.byline.original}
                  date={format_date(r.pub_date)}
                />
              )} */}
            </Col>
          ))}
      </Row>
    </div>
  )
}
