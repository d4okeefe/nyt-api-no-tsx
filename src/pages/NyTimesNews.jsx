import React, { useEffect, useState } from 'react'
import { format_date, within_six_months } from '../utils/FormatDate'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
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
      <h4>{props.title}</h4>
      <Row xs={1} md={2} lg={2}>
        {data.map((r, index) => (
          <Col>
            <Card className="card text-white bg-dark mb-3 newsCard">
              {r.multimedia && (
                <Image
                  className="card-img-top"
                  src={r.multimedia[0].url}
                  alt={r.multimedia[0].caption}
                ></Image>
              )}
              <div className="card-body">
                <a
                  className="link-info card-link"
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="card-title">{r.title}</h5>
                </a>
                <h6 className="card-subtitle">{r.abstract}</h6>
                <p className="card-text">{r.byline}</p>
                <p className="card-text">{format_date(r.published_date)}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
