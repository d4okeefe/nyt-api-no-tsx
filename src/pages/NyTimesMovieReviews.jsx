import React, { useEffect, useState } from 'react'

import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { format_date } from '../utils/FormatDate'

export default (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json`, {
        params: {
          'api-key': props.api_key,
        },
      })
      .then((response) => setData(response.data.results))
  }, [])

  return (
    <div className="NyTimesTable">
      <h4 className="mx-2">{props.title}</h4>
      <Table className="newsDataTable striped bordered hover table-dark">
        <thead>
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Summary</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, index) => (
            <tr key={index}>
              <td>
                <a
                  className="link-info"
                  href={r.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{r.display_title}</div>
                </a>
                <div>
                  <Image
                    className="rounded img-fluid"
                    src={r.multimedia.src}
                  ></Image>
                </div>
              </td>

              <td>{r.summary_short}</td>
              <td>{format_date(r.date_updated)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
