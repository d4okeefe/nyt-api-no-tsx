import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { format } from 'date-fns'

const parseDate = function (d) {
  try {
    let date = new Date(d)
    return format(date, 'd MMM yyyy')
  } catch {
    return d
  }
}

export default (props) => {
  const [data, setData] = useState([])
  // const [rss, setRss] = useState('')

  // View available feeds here
  // https://www.washingtonpost.com/discussions/2018/10/12/washington-post-rss-feeds/

  const wapo_axios = axios.create({
    baseURL: `https://feeds.washingtonpost.com/rss/`,
    timeout: 30000,
  })

  const wa_po_url = props.url

  useEffect(() => {
    wapo_axios.get(wa_po_url).then((response) => {
      const xml_string = response.data
      // setRss(xml_string)
      var parseString = require('xml2js').parseString
      parseString(xml_string, function (err, result) {
        const inner_array = []
        for (var i = 0; i < 100; i++) {
          // null check first
          if (result.rss.channel[0].item[i]) {
            inner_array[inner_array.length] = result.rss.channel[0].item[i]
          }
        }
        setData(inner_array)
      })
    })
  }, [])

  return (
    <div className="WaPoTable">
      <h4 className="mx-2">{props.title}</h4>
      {/* <p>{rss}</p> */}
      <Table className="newsDataTable striped bordered hover table-dark">
        <thead>
          <tr>
            {/* <th scope="col">Title with Link</th> */}
            {/* <th scope="col">Abstract</th> */}
            <th scope="col">Article with description</th>
            <th scope="col">Author</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, index) => (
            <tr key={index}>
              <td>
                <a
                  className="link-info"
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="news-title">{r.title}</div>
                </a>
                <p className="news-description">{r.description}</p>
              </td>

              {/* <td>
                <a
                  className="link-info"
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{r.title}</div>
                </a>
              </td>
              <td>
                <p>{r.description}</p>
              </td> */}
              <td>{r['dc:creator']}</td>
              <td>{parseDate(r.pubDate)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
