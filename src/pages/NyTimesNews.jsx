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
    baseURL: `https://api.nytimes.com/svc/topstories/v2/`,
    timeout: 30000,
  })

  const nyt_topstories_url = props.url

  useEffect(() => {
    nyt_topstories_axios
      .get(nyt_topstories_url, {
        params: {
          'api-key': props.api_key,
        },
      })
      .then((response) => setData(response.data.results))
  }, [])

  return (
    <div className="container NyTimesTable">
      <h4 className="title-header">{props.title}</h4>
      <Row xs={1} md={1} lg={2}>
        {data
          .filter((r) => {
            return !(r.title.trim() === '')
          })
          .map((r, index) => (
            <Col key={index}>
              <NewsCard
                image_url={r.multimedia && r.multimedia[0].url}
                image_caption={r.multimedia && r.multimedia[0].caption}
                url={r.url}
                title={r.title}
                description={r.abstract}
                byline={r.byline}
                date={format_date(r.published_date)}
              />
            </Col>
          ))}
      </Row>
    </div>
  )
}
