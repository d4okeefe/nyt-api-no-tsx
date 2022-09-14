import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { format } from 'date-fns'

const parseDate = function (d) {
  let date = new Date(d)
  return format(date, 'd MMM yyyy')
}

export default (props) => {
  const [data, setData] = useState([])
  const [rss, setRss] = useState('')

  useEffect(() => {
    axios
      .get(
        `https://feeds.washingtonpost.com/rss/sports?itid=lk_inline_manual_26`)
      .then((response) => {
        const xml_string = response.data
        setRss(xml_string)

        // var parseString = require('xml2js').parseString
        // parseString(xml_string, function (err, result) {
        //   const inner_array = []
        //   for (var i = 0; i < 100; i++) {
        //     // null check first
        //     if (result.rss.channel[0].item[i]) {
        //       inner_array[inner_array.length] = result.rss.channel[0].item[i]
        //     }
        //   }

        //   setData(inner_array)
        // })
      })
  }, [])

  return (
    <div className="WaPoTable">
      <h4 className="mx-2">{props.title}</h4>
      <p>{rss}</p>
      <Table className="newsDataTable striped bordered hover table-dark">
        <thead>
          <tr>
            <th scope="col">Title with Link</th>
            <th scope="col">Abstract</th>
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
                  <div>{r.title}</div>
                </a>
              </td>
              <td>
                {/* <p>{r.description}</p> */}
              </td>
              {/* <td>{r['dc:creator']}</td> */}
              {/* <td>{parseDate(r.pubDate)}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
