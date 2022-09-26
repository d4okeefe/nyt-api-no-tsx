import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import NewsCard from '../utils/NewsCard'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import { format } from 'date-fns'

const parseDate = function (d) {
  let date = new Date(d)
  return format(date, 'd MMM yyyy')
}

export default (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`https://www.newyorker.com/feed/everything`, {
        responseType: 'text',
      })
      .then((response) => {
        const xml_string = response.data
        // setRssFeed(xml_string)
        var parseString = require('xml2js').parseString
        parseString(xml_string, function (err, result) {
          const inner_array = []
          for (var i = 0; i < 100; i++) {
            // null check first
            if (result.rss.channel[0].item[i]) {
              inner_array[inner_array.length] = result.rss.channel[0].item[i]
            }
          }
          const curr_response = inner_array
          const shuffle = curr_response.sort((a, b) => Math.random() - 0.5)
          setData(shuffle)
        })
      })
  }, [])

  return (
    <div className="NewYorkerTable">
      {/* <div>{rssFeed}</div> */}
      <h4 className="title-header mx-2 NYerTable">{props.title}</h4>
      <Row xs={1} md={1} lg={2}>
        {data
          .filter((r) => {
            return !(r.title[0].trim() === '')
          })
          .map((r, index) => (
            <Col key={index}>
              <NewsCard
                image_url={
                  r['media:thumbnail'] && r['media:thumbnail'][0].$.url
                }
                image_caption=""
                url={r.link}
                title={r.title}
                description={r.description}
                byline={r['dc:creator']}
                date={parseDate(r.pubDate)}
              />
            </Col>
          ))}
      </Row>
    </div>
  )
}
